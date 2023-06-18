#!/usr/bin/env sh

# Enable errors
set -e

# Check whether there is a version argument
if [ -z "$1" ]; then
  printf "ERR: No version identifier supplied!\n"
  exit 1
else
    echo "-- Bumping version $1"

    # Fetching tags to make sure unknown tags are not re-created
    echo "-- Fetching tags and releases from remote"
    git fetch --all --tags

  # shellcheck disable=SC2046
  if [ $(git tag -l "v$1") ]; then
    echo "ERR: Git tag v$1 already exists!"
    exit 1
  fi

  echo "-- Building files"
  pnpm run build

  # Run the version command for the root package
  echo "-- Updating root project"
  pnpm version "$1"

  # Revert the auto-generated commit
  echo "-- Removed auto-generated commit from pnpm version"
  git reset --soft HEAD~1

  # Delete the auto generated tag
  echo "-- Remove generated tag from pnpm version"
  git tag -d "v$1"

  # Run the version command for every package
  echo "-- Updating child projects"
  pnpm -r version "$1"

  # Commit changes
  echo "-- Committing changes"
  git commit -a -m "Release $1"
  git tag -a "v$1" -m "Release $1"

  git commit -a -m "Release 0.10.2";git tag -a "v0.10.2" -m "Release 0.10.2"

  # Update lock files
  echo "-- Updating lock files"
  pnpm install

  # Push tags
  git push origin "v$1"

  # Exit
  exit 0
fi
