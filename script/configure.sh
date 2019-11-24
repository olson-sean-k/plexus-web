#! /usr/bin/env bash

set -e

if ! hash cargo 2>/dev/null; then
    exit 1
fi
if ! hash git 2>/dev/null; then
    exit 1
fi
if ! hash peru 2>/dev/null; then
    exit 1
fi
