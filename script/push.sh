#! /usr/bin/env bash

# Forces a push to the gh-pages branch on the origin remote. Checks out the
# source branch when done.

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

if ! hash git 2>/dev/null; then
    exit 1
fi

git checkout gh-pages

git push origin gh-pages --force
git checkout "$branch"
