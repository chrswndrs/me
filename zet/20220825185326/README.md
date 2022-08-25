# Differences between single quotes and double quotes in bash

There are three quoting mechanisms: 
1) the escape character
2) the single quotes
3) the double quotes

`' '`: Enclosing characters in single quotes preserves the literal
values of each character within the quotes. A single quote may not occur
between single quotes, even when proceed by a backslash.

`" "`: Enclosing characters in double quotes preserves the literal value
of all characters within the quotes, with the exception of `$`, the
backtick, and backslash, when history expansion is enabled.

Related:
 - man bash `/single quotes`

    #Unix #Linux #bash #quotation
