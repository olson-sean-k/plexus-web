#! /usr/bin/env bash

# This script performs a build, commits any and all changes to the `gh-pages`
# branch, and force pushes to the `origin` remote using the following steps:
#
#  - Perform a build and checkout via `checkout.sh`. This builds artifacts into
#    the `out` directory, checks out `gh-pages`, and copies the build into the
#    root of the working directory.
#  - Commit any and all changes via `commit.sh`. This destroys any history on
#    the `gh-pages` branch, producing a single new commit with the changes from
#    the build.
#  - Pushes the changes to `origin` via `push.sh`. The push is forced, because
#    history is always rewritten, keeping the `gh-pages` branch flat.
#
# Along with `build.sh`, this is one of the primary top-level scripts.

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
