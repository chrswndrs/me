# Git commands

## git stash, basic usage

`git stash` - stash changes
`git stash list` - list changes
`git stash stash@{0}` - show the contents
`git stash apply` - apply the last stash
`git stash apply stash@{0}` - apply a specific stash

## Advanced stashing - keeping files

`git stash --include-untracked` - keep untracked files
`git stash --all` - keep all files (even ignored ones)

## Advanced Stashing - Operations

`git stash save "WIP: making progress on foo"` - Name stashes for easy
reference
`git stash branch <branch-name> <operation stash name>` - start a new
branch from a stash
`git checkout <stash-name> --<filename>` - grab a single file from a stash

## Advanced Stashing - Cleaning the Stash

`git stash pop` - remove the last stash and applying changes (tip:
doesn't remove if there's a merge conflict).
`git stash drop` - remove the last stash
`git stash drop stash@{n}` - remove the nth stash
`git stash clear` - remove all stashes.
