#! /usr/bin/env bash

# This script performs a build (see `build.sh`) and then copies the output onto
# the `gh-pages` branch. This produces a working directory on `gh-pages` using
# the following steps:
#
#   - Check out the `gh-pages` branch.
#   - Remove all files from the working directory.
#   - Restore any and all files that are meant to be preserved and managed on
#     the `gh-pages` branch, such as `.gitignore`.
#   - Copy the output of the build into the working directory.
#
# These steps produce a working directory with any and all changes from the
# build that can be easily committed. See `commit.sh` and `publish.sh`.

set -e

cd $(dirname "$BASH_SOURCE")
script_dir=`pwd`

repo_dir="$script_dir"/../..
out_dir="$repo_dir"/out

"$script_dir"/configure.sh "$@"

branch="${1:?branch}"
shift

cd "$repo_dir"

git checkout "$branch"

if [ -n "$(git status --porcelain)" ] ; then
    git status
    exit 1
fi
git fetch
if [ "$(git rev-parse @)" != "$(git rev-parse @{u})" ] ; then
    git status
    exit 1
fi

"$script_dir"/build.sh "$branch" "$@"

git checkout gh-pages
git rm -rf .
git checkout HEAD -- .gitignore
cp -r "$out_dir"/doc/* "$repo_dir"/.
