SHELL:=/usr/bin/env bash
#.SHELLFLAGS:=-e

OUT:=./out
LIB:=$(OUT)/lib
DOC:=$(OUT)/doc

build:
	mkdir -p $(OUT)
	git rev-parse --short HEAD >$(OUT)/hash
	git remote get-url --push origin >$(OUT)/origin
	peru sync
	mkdocs build
	# TODO: It should be possible to use `cargo +nightly doc` here, but due to
	#       an issue resolving paths for `cargo doc` vs. `cargo test`, this
	#       script is used instead.
	#
	#       See https://github.com/rust-lang/cargo/issues/8097
	$(LIB)/rustdoc.sh \
		-p plexus \
		-p theon \
		--no-deps \
		--all-features \
		--manifest-path=$(LIB)/Cargo.toml
	# Replace any previous builds of the API documentation.
	rm -rf $(DOC)/rustdoc
	cp -a $(LIB)/target/doc $(DOC)/rustdoc
	# Copy configuration into the output.
	cp .gitignore CNAME $(DOC)

publish: build upstream
	# Create a temporary directory.
	mktemp --tmpdir -d tmp.plexus-web.XXXX >$(OUT)/tmp
	# Copy the build artifacts into the temporary directory.
	cp -aT $(DOC) $$(cat $(OUT)/tmp)
	# Create a repository and push a single commit to the `origin` remote.
	git -C $$(cat $(OUT)/tmp) init
	git -C $$(cat $(OUT)/tmp) checkout -b gh-pages
	git -C $$(cat $(OUT)/tmp) remote add origin $$(cat $(OUT)/origin)
	git -C $$(cat $(OUT)/tmp) add .
	git -C $$(cat $(OUT)/tmp) commit -m "Build from $$(cat $(OUT)/hash)."
	git -C $$(cat $(OUT)/tmp) push origin gh-pages --force

upstream:
	# TODO: The upstream branch may not be on the `origin` remote.
	# Ensure that the source revision also exists on the upstream branch.
	if [ -n "$$(git status --porcelain)" ]; then \
		git status && false; \
	fi
	git fetch
	if [ "$$(git rev-parse @)" != "$$(git rev-parse @{u})" ]; then \
		git status && false; \
	fi

clean:
	rm -rf $(OUT)
