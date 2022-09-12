# Differences between single quotes and double quotes in bash

There are three quoting mechanisms: 
1) the escape character
2) the single quotes
3) the double quotes
4) Back quote

`' '`: The single quote in Shell ignores all type of special characters
in it. Everything between the single quotes is considered one single
element. Enclosing characters in single quotes preserves the literal
values of each character within the quotes. A single quote may not occur
between single quotes, even when proceed by a backslash.

`" "`: Double quotes work almost similar to single quotes. Almost
because they also tend to ignore all the special characters except:
   - Dollar signs `$`
   - back quotes 
   - Backslashes
Since dollar sign is not ignored, you can expect variable name to be
substituted with its value. Which is not the case with the single
quotes. Enclosing characters in double quotes preserves the literal value
of all characters within the quotes, with the exception of `$`, the
backtick, and backslash, when history expansion is enabled. The double
quotes can be used to hide double quotes from the shell.

`backquotes`: are used for command substitution. The shell has this
command substitution feature where a specified command is replaced with
the output of the command. For years, the back quotes were used for
command substitution in Shell scripting. But these days, modern UNIX and
Linux systems prefer the `$(command)` construct instead.

Related:
 - man bash: single quotes
 - Linux Handbook: differences between single quotes and quotes in bash

    #Unix #Linux #bash #quotation
