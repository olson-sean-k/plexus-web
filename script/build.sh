#! /usr/bin/env bash

# This script builds the website in the following steps:
#
#   - Fetch the code for Plexus via `peru`. See `peru.yaml`.
#   - Build the website documentation via `mkdocs`.
#   - Build the API documention via `rustdoc`.
#   - Copy the `CNAME` configuration into the build output.
#
# Output of the build is written to the `out` directory. The `out/doc` directory
# is the primary output and is normally what gets copied to the root of the
# `gh-pages` branch.
#
# Along with `publish.sh`, this is one of the primary top-level scripts.

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
