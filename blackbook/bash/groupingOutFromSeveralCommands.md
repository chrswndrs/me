# Saving or Grouping Output from Several Commands

You want to capture the output with a redirect, but you're typing several commands on one line.

```bash
pwd; ls; cd ../elsewhere; pwd; ls > /tmp/all.out
```
The final redirect applies only to the last command, the last ls on that line. All other
get output to screen.

```bash
# use {} to group these commands together, then redirection applies 
# to the output from all commands in the group.
{ pwd; ls; cd ../elsewhere; pwd; ls } > /tmp/all.out

# alternative you could use () to tell bash to run the command
# in a subshell, then redirect the entire subshell's execution output
( pwd; ls; cd ../elsewhere; pwd; ls ) > /tmp/all.out

```

    #bash #cookbook #o'reilly #2.14
