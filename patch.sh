#! /usr/bin/env bash

set -e

cd $(dirname "$BASH_SOURCE")
repo_dir=`pwd`

src_dir="$repo_dir"/src
out_dir="$repo_dir"/out

rustdoc_out_dir="$out_dir"/lib/target/doc
mkdocs_out_dir="$out_dir"/doc

echo "Patching website and API documentation."
files=`find "$rustdoc_out_dir"/plexus -name \*.html -printf '%p '`
for file in `echo "$files"`
do
done
