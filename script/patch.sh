#! /usr/bin/env bash

# This script patches the HTML documents build by `rustdoc`.

set -e

cd $(dirname "$BASH_SOURCE")
script_dir=`pwd`

repo_dir="$script_dir"/../..
src_dir="$repo_dir"/src
out_dir="$repo_dir"/out

branch="${1:?branch}"
shift

cd "$repo_dir"

# TODO: Patch the HTML.
for document in `find "$out_dir"/doc/rustdoc -name \*.html -printf '%p '`
do
    :
done
