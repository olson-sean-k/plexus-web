#! /usr/bin/env bash

# Ensure the master branch is clean, perform a build, and copy the output to the
# gh-pages branch.

set -e

cd $(dirname "$BASH_SOURCE")
script_dir=`pwd`

repo_dir="$script_dir"/../..
out_dir="$repo_dir"/out

cd "$repo_dir"

which git > /dev/null

git checkout master

if [ -n "$(git status --porcelain)" ] ; then
    git status
    exit 1
fi
git fetch
if [ "$(git rev-parse @)" != "$(git rev-parse @{u})" ] ; then
    git status
    exit 1
fi

"$script_dir"/build.sh

git checkout gh-pages
cp -r "$out_dir"/doc/* "$repo_dir"/.
