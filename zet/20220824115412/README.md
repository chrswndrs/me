# What is the difference between an alias, a function and commands in bash?

An Alias:
is like an pointer/variable to a program or you could think of it like a nickname. Should be reserved for simple usecases.
By Default, aliases are inteded to only work in an interactive console, they are not meant to be used in scripts.
Aliases are just replaced by their values.
They cannot be used as Vim Filters.

A Functions:
contain logic, or you might make calls to other programms. Functions will be interpreted by the shell.
Can be used to build very complex programs. Also they pipe better than aliases where using an alias your
locked into what’s defined by the alias (unless quoted).

command vs. which:
`which` looks through the path and then tells you where a command is located. Because of this you should avoid it in scripts.
`command -v` is likely built into your shell, and the `-v` will tell you how your shell will invoke the command specified
as it's option.


Related:

    #Unix #Linux #bash #cli
