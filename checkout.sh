#! /usr/bin/env bash

set -e

cd $(dirname "$BASH_SOURCE")
repo_dir=`pwd`

which git > /dev/null

out_dir="$repo_dir"/out

git checkout gh-pages
cp -r "$out_dir"/doc/* "$repo_dir"/.
