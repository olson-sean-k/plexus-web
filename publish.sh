#! /usr/bin/env bash

set -e

cd $(dirname "$BASH_SOURCE")
repo_dir=`pwd`

out_dir="$repo_dir"/out

mkdir -p "$out_dir"/script
cp -a "$repo_dir"/script "$out_dir"

"$out_dir"/script/publish.sh
