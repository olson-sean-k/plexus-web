#! /usr/bin/env bash

set -e

cd $(dirname "$BASH_SOURCE")
repo_dir=`pwd`

out_dir="$repo_dir"/out

cp -r "$repo_dir"/script "$out_dir"

"$out_dir"/script/publish.sh
