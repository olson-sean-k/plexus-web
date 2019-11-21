#! /usr/bin/env bash

# Ensure the master branch is clean and perform a build. Checkout the gh-pages
# branch, remove all files, and then copy the output of the build into the
# branch.

set -e

cd $(dirname "$BASH_SOURCE")
script_dir=`pwd`

repo_dir="$script_dir"/../..
out_dir="$repo_dir"/out

cd "$repo_dir"

if ! hash git 2>/dev/null; then
    exit 1
fi

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
git rm -rf .
git checkout HEAD -- .gitignore
cp -r "$out_dir"/doc/* "$repo_dir"/.
