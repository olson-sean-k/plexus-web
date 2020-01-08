SHELL:=/usr/bin/env bash
#.SHELLFLAGS:=-e

TMP:=$(shell mktemp -d)
OUT=./out
LIB=$(OUT)/lib
DOC=$(OUT)/doc

build: configure
	git rev-parse --short HEAD >$(OUT)/hash
	git remote get-url --push origin >$(OUT)/origin
	peru sync
	mkdocs build
	$(LIB)/rustdoc.sh \
		-p theon \
		--all-features \
		--manifest-path=$(LIB)/Cargo.toml
	# Remove any previous builds of the API documentation.
	rm -rf $(DOC)/rustdoc
	cp -a $(LIB)/target/doc $(DOC)/rustdoc
	# Copy configuration into the output.
	cp .gitignore CNAME $(DOC)

publish: build
	# Ensure that the source revision also exists on the `origin` remote.
	if [ -n "$$(git status --porcelain)" ]; then \
		git status && false; \
	fi
	git fetch
	if [ "$$(git rev-parse @)" != "$$(git rev-parse @{u})" ]; then \
		git status && false; \
	fi
	# Copy the build artifacts to a temporary directory.
	cp -a $(DOC)/* $(TMP)
	# Create a repository and push a single commit to the `origin` remote.
	git -C $(TMP) init
	git -C $(TMP) checkout -b gh-pages
	git -C $(TMP) remote add origin $$(cat $(OUT)/origin)
	git -C $(TMP) add .
	git -C $(TMP) commit -m "Build from $$(cat $(OUT)/hash)."
	git -C $(TMP) push origin gh-pages --force

configure:
	# `cargo` and `peru` may be absent. Fail if they are not in `PATH`.
	hash cargo 2>/dev/null
	hash peru 2>/dev/null
	mkdir -p $(OUT)

clean:
	rm -rf $(OUT)
