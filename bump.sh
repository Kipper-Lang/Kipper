#!/usr/bin/env sh

set -e

if [ -z "$1" ]
then
  echo "No version identifier supplied"
else
  # Run the version command for the root package
  pnpm version "$1"

  # Revert the auto-generated commit
  git reset --soft HEAD~1

  # Delete the auto generated tag
  git tag -d "v$1"

  # Run the version command for every package
  pnpm -r version "$1"

  git commit -a -m "Bumped package versions to \"$1\""
  git tag -a "v$1" -m "Release $1"
fi
