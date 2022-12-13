# What are the three types of GIT References?

- Tags & Annotated Tags
- Branches
- HEAD

*What's a branch* 
A branch is just a pointer to a particular commit.
The pointer of the current breach changes as new commits are made.

*What is HEAD?* 
Head is how git knows what branch you're currently on, and what the next
parent will be.
It's a pointer
  - usually points at the name of the current branch.
  - But it can point at a commit too (detached HEAD)
It moves when:
  - you make a commit in the currently active branch
  - when you checkout a new branch.

*Lightweight Tags*
- Lightweight tags are just a simple pointer to a commit
- When you create a tag with no arguments, it captures the value in HEAD

*Annotagted Tags: GIT TAG -A*
- Point to a commit, but store additional information.
  - Author, message, date.

*HEAD-LESS / DETACHEDHEAD*
- Sometimes you need to checkout a specific commit (or tag) instead of
  branch.
- git moves the HEAD pointer to that commit.
- as soon as you checkout a different branch or commit, the value of
  HEAD will point to the new SHA1.
- There is no reference pointing to the commits you made in a detached
  state.

*Save your work*
- Create a new branch that points to the last commit you made in a
  detached state.
  - `git branch <new-branch-name> <commit>`
- Why the last commit?
- Because the other commits point to their parents.

*Dangling commits* 
Discard your work:
- if you don't point a new branch at those commits, they will no longer
  be referenced in .git (dangling commit)
- eventually they will be garbage collected.

        #git #tag #annotatedTag #branch #HEAD
