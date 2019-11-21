#! /usr/bin/env bash

# Commit any changes to gh-pages and reset the initial commit. This flattens the
# history on the gh-pages branch.

set -e

cd $(dirname "$BASH_SOURCE")
script_dir=`pwd`

repo_dir="$script_dir"/../..
out_dir="$repo_dir"/out
src_hash=`cat "$out_dir"/hash`

cd "$repo_dir"

if ! hash git 2>/dev/null; then
    exit 1
fi

git checkout gh-pages

if [ -z "$(git status --porcelain)" ] ; then
    exit 1
fi

git add .
git commit -m "Build from $src_hash."
git reset $(git commit-tree HEAD^{tree} -m "Build from $src_hash.")
