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

"$script_dir"/configure.sh "$@"

branch="${1:?branch}"
shift

cd "$repo_dir"

git checkout "$branch"

mkdir -p "$out_dir"
git rev-parse --short HEAD >"$out_dir"/hash

peru sync

mkdocs build

"$out_dir"/lib/rustdoc.sh \
    -p theon \
    --all-features \
    --manifest-path="$out_dir"/lib/Cargo.toml
rm -rf "$mkdocs_out_dir"/rustdoc
cp -r "$rustdoc_out_dir" "$mkdocs_out_dir"/rustdoc

cp "$repo_dir"/CNAME "$mkdocs_out_dir"
