#! /usr/bin/env bash

set -e

cd $(dirname "$BASH_SOURCE")
repo_dir=`pwd`

src_dir="$repo_dir"/src
out_dir="$repo_dir"/out
mkdocs_out_dir="$out_dir"/doc
rustdoc_out_dir="$out_dir"/lib/target/doc

mkdir -p "$out_dir"
git rev-parse --short HEAD > "$out_dir"/hash

which cargo > /dev/null
which git > /dev/null
which peru > /dev/null

peru reup

echo "Building website documentation."
mkdocs build > /dev/null

echo "Building API documentation."
cargo +nightly doc --manifest-path="$out_dir"/lib/Cargo.toml -p plexus --no-deps > /dev/null
rm -rf "$mkdocs_out_dir"/rustdoc
cp -r "$rustdoc_out_dir" "$mkdocs_out_dir"/rustdoc

echo "Done."
