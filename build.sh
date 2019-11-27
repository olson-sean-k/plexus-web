#! /usr/bin/env bash

# Builds the documentation.

set -e

cd $(dirname "$BASH_SOURCE")
repo_dir=`pwd`

out_dir="$repo_dir"/out

mkdir -p "$out_dir"/script
cp -a "$repo_dir"/script "$out_dir"

"$out_dir"/script/configure.sh "$@"

branch="${1:-`git rev-parse --abbrev-ref HEAD`}"
shift || true

"$out_dir"/script/build.sh "$branch" "$@"
