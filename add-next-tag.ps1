#!/usr/bin/env pwsh

# The first arg is the version
$version = $args[0]

# Apply to all packages
$(npm dist-tag add kipper@$version next)
$(npm dist-tag add @kipper/cli@$version next)
$(npm dist-tag add @kipper/core@$version next)
$(npm dist-tag add @kipper/target-js@$version next)
$(npm dist-tag add @kipper/target-ts@$version next)
$(npm dist-tag add @kipper/web@$version next)
ExitOnFailure

# Exit
Exit 0
