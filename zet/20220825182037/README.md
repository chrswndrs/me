# Differences between Braces and Parentheses in Bash

- The braces `{ }` are just a way to group several commands together, more
  like a shorthand for our redirecting, so that we don't have to redirect
  each command separately.

- The Parenthesis `( )`: 
  Commands enclosed in parentheses, however, run in another instance of
  the shell, a child of the current shell called a subshell.

  The subshell is almost identical to the current shell's environment,
  i.e. variables, including `$PATH`, are all the same, but traps are
  handled differently.

  Now here is the big difference in using the subshell approach: because
  subshell is used to execute the cd commands, when the subshell exits,
  your main shell is back where it started, i.e., its current directory
  hasn't moved, and its variables haven't changed.

  With braces you end up in a new directory, any other changes that you
  make (var changes) will be made to your current shell instance.

Related: 
 - bash Cookbook by Carl Albing, JP Vossen, and Cameron Newham,
   Copyright 2007 O'Reilly Media, Inc.

    #Unix #Linux #bash #braces #parentheses
