SHELL:=/usr/bin/env bash
#.SHELLFLAGS:=-e

# TODO: This requires `git`, but the `configure` target has not yet executed.
REV?=$(shell git rev-parse --abbrev-ref HEAD)

OUT=./out
SCRIPT=$(OUT)/script

build: configure
	$(SCRIPT)/build.sh $(REV)
	$(SCRIPT)/patch.sh $(REV)

publish: build
	$(SCRIPT)/publish.sh $(REV)

configure: provision
	$(SCRIPT)/configure.sh

provision:
	mkdir -p $(OUT)
	cp -a script $(OUT)

clean:
	rm -rf $(OUT)
