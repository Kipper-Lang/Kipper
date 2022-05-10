#!/usr/bin/env sh

# Enable errors
set -e

# Check whether there is a version argument
if [ -z "$1" ]; then
  printf "ERR: No version identifier supplied!"
  exit 1
else
    printf "-- Bumping version %s" "$1"

    # Fetching tags to make sure unknown tags are not re-created
    printf "-- Fetching tags and releases from remote"
    git fetch --all --tags

  # shellcheck disable=SC2046
  if [ $(git tag -l "v$1") ]; then
    printf "ERR: Git tag v%s already exists!" "$1"
    exit 1
  fi

  # Run the version command for the root package
  printf "-- Updating root project"
  pnpm version "$1"

  # Revert the auto-generated commit
  printf "-- Removed generated commit from pnpm version"
  git reset --soft HEAD~1

  # Delete the auto generated tag
  printf "-- Remove generated tag from pnpm version"
  git tag -d "v$1"

  # Run the version command for every package
  printf "-- Updating child projects"
  pnpm -r version "$1"

  # Commit changes
  printf "-- Committing changes"
  git commit -a -m "Release $1"
  git tag -a "v$1" -m "Release $1"

  # Update lock files
  printf "-- Updating lock files"
  pnpm install

  # Push tags
  git push origin "v$1"

  # Exit
  exit 0
fi
