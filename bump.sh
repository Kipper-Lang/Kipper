#!/usr/bin/env sh

set -e

if [ -z "$1" ]; then
  printf "No version identifier supplied"
else
  if [ "$(git tag -l "$1")" ]; then
      echo "Tag/Version v$1 already exists"
      exit 1
  fi

  # Run the version command for the root package
  printf "\n -- Updating root project:\n"
  pnpm version "$1"

  # Revert the auto-generated commit
  printf "\n -- Removed generated commit from pnpm version:\n"
  git reset --soft HEAD~1

  # Delete the auto generated tag
  printf "\n -- Remove generated from pnpm version:\n"
  git tag -d "v$1"

  # Run the version command for every package
  printf "\n -- Updating child projects:\n"
  pnpm -r version "$1"

  # Commit changes
  printf "\n -- Committing changes:\n"
  git commit -a -m "Bumped package versions to \"$1\""
  git tag -a "v$1" -m "Release $1"

  # Update lock files
  printf "\n -- Updating lock files:\n"
  pnpm install
fi
