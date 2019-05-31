#! /usr/bin/env bash

# Forces a push to the gh-pages branch on the origin remote. Checks out the
# master branch when done.

set -e

cd $(dirname "$BASH_SOURCE")
script_dir=`pwd`

repo_dir="$script_dir"/../..
out_dir="$repo_dir"/out
src_hash=`cat "$out_dir"/hash`

cd "$repo_dir"

which git > /dev/null

git checkout gh-pages

git push origin gh-pages --force
git checkout master
