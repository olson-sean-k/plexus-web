#! /usr/bin/env bash

set -e

cd $(dirname "$BASH_SOURCE")
repo_dir=`pwd`

out_dir="$repo_dir"/out

which git > /dev/null

if [ -n "$(git status --porcelain)" ] ; then
    git status
    exit 1
fi

git checkout gh-pages
cp -r "$out_dir"/doc/* "$repo_dir"/.
