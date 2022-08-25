# Saving or Grouping Output from Several Commands

You want to capture the output with a redirect, but you're typing several commands on one line.

```bash
pwd; ls; cd ../elsewhere; pwd; ls > /tmp/all.out
```
The final redirect applies only to the last command, the last ls on that line. All other
get output to screen.

```bash
# 1 
# use {} to group these commands together, then redirection applies 
# to the output from all commands in the group.
{ pwd; ls; cd ../elsewhere; pwd; ls; } > /tmp/all.out

# 2
# alternative you could use () to tell bash to run the command
# in a subshell, then redirect the entire subshell's execution output
( pwd; ls; cd ../elsewhere; pwd; ls ) > /tmp/all.out

```
1) Syntactically: the braces need to have whitespace around them and the last command inside 
   the list must terminate with a semicolon. Thats not required when you use parentheses.
2) Semantic: It's the bigger difference. The braces are just a way to group several commands together
   more like a shorthand for our redirecting.
   Commands enclosed in parenteses, however, run in a another instance of the shell, a child of the current
   shell called, subshell


    #bash #cookbook #o'reilly #2.14
