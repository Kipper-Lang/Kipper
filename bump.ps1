#!/usr/bin/env pwsh

$ErrorActionPreference = "Stop"
$PSDefaultParameterValues['*:ErrorAction']='Stop'

function ExitOnFailure {
  if ($LastExitCode -ne 0)
  {
    Write-Output ""
    Write-Error "Unexpected error during operation"
    Exit 1
  }
}

# Check whether there is a version argument
if ( $args.Count -lt 1 ) {
  Write-Output "ERR: No version identifier supplied"
  Exit 1
}
elseif ($args.Count -gt 1)
{
  Write-Error "ERR: Too many arguments!"
  Exit 1
}
else
{
  Write-Output ("-- Bumping version {0}" -f $args[0])

  # Fetching tags to make sure unknown tags are not re-created
  Write-Output "-- Fetching tags and releases from remote"
  $null = $(git fetch --all --tags)

  # Make sure the tag doesn't exist already
  $tag = $(git tag -l ("v{0}" -f $args[0]))
  if ($tag -eq ("v{0}" -f $args[0]))
  {
    Write-Error ("ERR: Git tag v{0} already exists!" -f $args[0])
    Exit 1
  }

  # Run the version command for the root package
  Write-Output "-- Updating root project"
  $(pnpm version ("{0}" -f $args[0]))
  ExitOnFailure

  # Revert the auto-generated commit
  Write-Output "-- Removed generated commit from pnpm version"
  $null = $(git reset--soft HEAD~1)
  ExitOnFailure

  # Delete the auto generated tag
  Write-Output "-- Remove generated tag from pnpm version"
  $(git tag -d ("v{0}" -f $args[0]))
  ExitOnFailure

  # Run the version command for every package
  Write-Output "-- Updating child projects"
  $(pnpm -r version ("{0}" -f $args[0]))
  ExitOnFailure

  # Commit changes
  Write-Output "-- Committing changes"
  $(git commit -a -m ("Release {0}" -f $args[0]))
  $(git tag -a ("v{0}" -f $args[0]) -m ("Release {0}" -f $args[0]))
  ExitOnFailure

  # Update lock files
  Write-Output "-- Updating lock files"
  $null = $(pnpm install)
  ExitOnFailure

  Exit 0

  # Push tags
  $(git push origin ("v{0}" -f $args[0]))

  # Exit
  Exit 0
}
