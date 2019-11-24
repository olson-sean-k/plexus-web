#! /usr/bin/env bash

# Forces a push to the gh-pages branch on the origin remote. Checks out the
# source branch when done.

set -e

cd $(dirname "$BASH_SOURCE")
script_dir=`pwd`

repo_dir="$script_dir"/../..

"$script_dir"/configure.sh "$@"

branch="${1:?branch}"
shift

cd "$repo_dir"

"$script_dir"/checkout.sh "$branch" "$@"
"$script_dir"/commit.sh "$branch" "$@"
"$script_dir"/push.sh "$branch" "$@"
