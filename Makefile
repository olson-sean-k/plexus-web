SHELL:=/usr/bin/env bash
#.SHELLFLAGS:=-e

# TODO: This requires `git`, but the `configure` target has not yet executed.
REV?=$(shell git rev-parse --abbrev-ref HEAD)

OUT=./out
LIB=$(OUT)/lib
SITE=$(OUT)/doc

build: configure
	git checkout $(REV)
	git rev-parse --short HEAD >$(OUT)/hash
	peru sync
	mkdocs build
	$(LIB)/rustdoc.sh \
		-p theon \
		--all-features \
		--manifest-path=$(LIB)/Cargo.toml
	rm -rf $(SITE)/rustdoc
	cp -a $(LIB)/target/doc $(SITE)/rustdoc
	cp .gitignore CNAME $(SITE)

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
	# Check out `gh-pages`.
	git checkout gh-pages
	git rm -rf .
	# Restore the `.gitignore` file.
	git checkout HEAD -- .gitignore
	cp -a $(SITE)/* .
	git add .
	git commit --allow-empty-message -m ""
	git reset $$(git commit-tree HEAD^{tree} -m "Build from $$(cat $(OUT)/hash).")
	git push origin gh-pages --force
	git checkout $(REV)

configure: provision
	hash cargo 2>/dev/null
	hash git 2>/dev/null
	hash peru 2>/dev/null

provision:
	mkdir -p $(OUT)
	cp -a script $(OUT)

clean:
	rm -rf $(OUT)
