#! /usr/bin/env bash

# This script is a prelude that is executed by other scripts. It ensures that
# the necessary tools are available and in the `PATH`.

set -e

if ! hash cargo 2>/dev/null; then
    echo "\`cargo\` not found"
    exit 1
fi
if ! hash git 2>/dev/null; then
    echo "\`git\` not found"
    exit 1
fi
if ! hash peru 2>/dev/null; then
    echo "\`peru\` not found"
    exit 1
fi
