#! /usr/bin/env bash

# This is an intermediate script and is not meant to be executed independently.
# Use caution if executing this script directly.

# This script forces a push to the `gh-pages` branch on the `origin` remote.
# When complete, the source branch is checked out.

set -e

cd $(dirname "$BASH_SOURCE")
script_dir=`pwd`

repo_dir="$script_dir"/../..
out_dir="$repo_dir"/out
src_hash=`cat "$out_dir"/hash`

"$script_dir"/configure.sh "$@"

branch="${1:?branch}"
shift

cd "$repo_dir"

git checkout gh-pages

git push origin gh-pages --force
git checkout "$branch"
