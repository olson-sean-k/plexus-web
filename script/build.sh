#! /usr/bin/env bash

# Fetch and build the API documentation via `rustdoc` and the website
# documentation via `mkdocs` and write the outputs to the `out` directory.

set -e

cd $(dirname "$BASH_SOURCE")
script_dir=`pwd`

repo_dir="$script_dir"/../..
src_dir="$repo_dir"/src
out_dir="$repo_dir"/out
mkdocs_out_dir="$out_dir"/doc
rustdoc_out_dir="$out_dir"/lib/target/doc

cd "$repo_dir"

which cargo > /dev/null
which git > /dev/null
#which peru > /dev/null

git checkout master

mkdir -p "$out_dir"
git rev-parse --short HEAD > "$out_dir"/hash

#peru reup

mkdocs build > /dev/null

"$out_dir"/lib/rustdoc.sh --all-features --manifest-path="$out_dir"/lib/Cargo.toml > /dev/null
rm -rf "$mkdocs_out_dir"/rustdoc
cp -r "$rustdoc_out_dir" "$mkdocs_out_dir"/rustdoc
