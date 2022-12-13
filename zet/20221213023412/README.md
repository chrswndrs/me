# What are the three areas where you code lives (git)?

*1. Working Area, working tree*
*2. Staging Area, cache / index*
*3. Repository*

*Working Area*
The files in your working area that are also not in the staging are
handled by git. Also called untracked files.

*Staging Area*
What files are going to be part of the next commit.
The staging area is how git knows what will change between the current
commit and the next commit.

*Deeper look at the staging Area*
The staging area is how git knows what will change between the current
commit and the next commit.
  Tip: a "clean" staging area isn't empty!
Consider the baseline staging are as being an exact copy of the latest
commit.
  `git ls-files -s` - the plumbing command `ls-files -s` will show you
  what's in the staging area.

*"unstage" Files from the staging Area*
- Not removing the files.
- You're replacing them with a copy thats currently in the repository.

  WORKING AREA --ADD--> STAGING AREA, STAGING AREA --CHECKOUT--> WORKING
  AREA

  WORK --------commit -a -------->REPO 
  WORK --add--> STAGE --commit--> REPO
  REPO----checkout branch/SHA--->WORK
  STAGE---checkout--->WORK

*Repository*
The files git knows about! Contains all of your commits.

      #git #workingTree #staging #repo
