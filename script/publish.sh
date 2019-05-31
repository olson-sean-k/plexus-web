#! /usr/bin/env bash

# Forces a push to the gh-pages branch on the origin remote. Checks out the
# master branch when done.

set -e

cd $(dirname "$BASH_SOURCE")
script_dir=`pwd`

repo_dir="$script_dir"/../..

cd "$repo_dir"

"$script_dir"/checkout.sh
"$script_dir"/commit.sh
"$script_dir"/push.sh
