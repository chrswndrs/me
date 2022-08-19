# What is command substitution in bash?

If you have something like this `"$(date)"` in your bash script.
Command substitution is if you have a single bracket around a thing and that runs the program
and replaces the $(thing) with the output of thing, or with the output of date as mentioned
in the sentence above.

It runs the programm and take the shell-script as its parent.

Related:
 - `man bash`, `/command substitution` or `/Parameter Expansion`

      #Unix #Linux #bash #command-substitution
