#!/bin/bash

# The first arg is the version
if [ -z "$1" ]; then
  printf "ERR: No version identifier supplied!\n"
  exit 1
fi

version=$1

# Apply to all packages
npm dist-tag add kipper@$version next
npm dist-tag add @kipper/cli@$version next
npm dist-tag add @kipper/core@$version next
npm dist-tag add @kipper/target-js@$version next
npm dist-tag add @kipper/target-ts@$version next
npm dist-tag add @kipper/config@$version next
npm dist-tag add @kipper/web@$version next
