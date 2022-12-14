# What is Git RERERE?

RERERE stands for Reuse Recorded Resolution.

- git saves how you resolve a conflict.
- next conflict: reuse the same resolution.
- useful for: 
  - long lived feature branch (like a refactor)
  - rebasing

*Turn it on:* 
- git config rerere.enabled true
- use --global flag to enable for all projects.

      #git #rerere #rebase #refactor #conflicts
