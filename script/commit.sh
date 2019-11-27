#! /usr/bin/env bash

# This is an intermediate script and is not meant to be executed independently.
# Use caution if executing this script directly.

# This script checks out the `gh-pages` branch and then adds and commits any
# changes in the working directory. The commit is used to reset using
# `commit-tree`, which destroys any history on the `gh-pages` branch.

set -e

cd $(dirname "$BASH_SOURCE")
script_dir=`pwd`

repo_dir="$script_dir"/../..
out_dir="$repo_dir"/out
src_hash=`cat "$out_dir"/hash`

"$script_dir"/configure.sh "$@"

cd "$repo_dir"

git checkout gh-pages

if [ -z "$(git status --porcelain)" ] ; then
    exit 1
fi

git add .
git commit -m "Build from $src_hash."
git reset $(git commit-tree HEAD^{tree} -m "Build from $src_hash.")
