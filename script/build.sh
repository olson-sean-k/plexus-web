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

if ! hash cargo 2>/dev/null; then
    exit 1
fi
if ! hash git 2>/dev/null; then
    exit 1
fi
if ! hash peru 2>/dev/null; then
    exit 1
fi

git checkout master

mkdir -p "$out_dir"
git rev-parse --short HEAD >"$out_dir"/hash

peru sync 2>&1 | tee "$out_dir"/peru.log

mkdocs build 2>&1 | tee "$out_dir"/mkdocs.log

"$out_dir"/lib/rustdoc.sh \
    -p theon \
    --all-features \
    --manifest-path="$out_dir"/lib/Cargo.toml \
    2>&1 | tee "$out_dir"/rustdoc.log
rm -rf "$mkdocs_out_dir"/rustdoc
cp -r "$rustdoc_out_dir" "$mkdocs_out_dir"/rustdoc

cp "$repo_dir"/CNAME "$mkdocs_out_dir"
