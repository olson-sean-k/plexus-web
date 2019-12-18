SHELL:=/usr/bin/env bash
#.SHELLFLAGS:=-e

REV?=$(shell git rev-parse --abbrev-ref HEAD)

OUT=./out
LIB=$(OUT)/lib
DOC=$(OUT)/doc

build: configure
	git checkout $(REV)
	git rev-parse --short HEAD >$(OUT)/hash
	peru sync
	mkdocs build
	# Move the template HTML into the root of the output directory.
	# This file is used as a template for patching `rustdoc` documents.
	mv $(DOC)/template/index.html $(OUT)/template.html
	rm -rf $(DOC)/template
	$(LIB)/rustdoc.sh \
		-p theon \
		--all-features \
		--manifest-path=$(LIB)/Cargo.toml
	# Remove any previous builds of the API documentation.
	rm -rf $(DOC)/rustdoc
	cp -a $(LIB)/target/doc $(DOC)/rustdoc
	# TODO: Patch `rustdoc` documents.
	cp .gitignore CNAME $(DOC)

publish: build
	# Check out the source revision and ensure that it also exists on the
	# `origin` remote.
	git checkout $(REV)
	if [ -n "$$(git status --porcelain)" ]; then \
		git status && false; \
	fi
	git fetch
	if [ "$$(git rev-parse @)" != "$$(git rev-parse @{u})" ]; then \
		git status && false; \
	fi
	# Check out `gh-pages` and remove all files.
	git checkout gh-pages
	git rm -rf .
	# Restore the `.gitignore` file.
	git checkout HEAD -- .gitignore
	cp -a $(DOC)/* .
	git add .
	git commit --allow-empty-message -m ""
	git reset $$(git commit-tree HEAD^{tree} -m "Build from $$(cat $(OUT)/hash).")
	git push origin gh-pages --force
	git checkout $(REV)

configure:
	# `cargo` and `peru` may be absent. Fail if they are not in `PATH`.
	hash cargo 2>/dev/null
	hash peru 2>/dev/null
	mkdir -p $(OUT)

clean:
	rm -rf $(OUT)
