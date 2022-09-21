# What is =~ in Bash scripts?

An additional binary operator, `=~`, is available, with the same
precedence as `==` and `!=`. When it is used, the string to the right of
the operator is considered a `POSIX` extended regular expression and
matched accordingly (using the `POSIX` `regcomp` and `regexec` interfaces
usually described in regex(3)). The return value is 0 if the string
matches the pattern, and 1 otherwise. If the regular expression is
syntactically incorrect, the conditional expression's return value is 2.

Related:
 - man bash -> search for `=~`

      #Unix #Linux #bash #=~ #binaryOperator
