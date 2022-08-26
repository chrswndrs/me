# Bash Scripting

* `echo Foo` - print `Foo` to standard output
* `echo $?` - display last return value
* `printf` - print with escapes and formatting
* `alias` - give a nickname to a bash command
* `export` - export a specific PATH to use
* `exit` - set exit code
* `return` - 
* `declare` - declare variable type (in bash only integer, string, boolean)
* `local` - set a variable to be local to function.
* `unset` - unset a variable (clear scope and content)
* `watch` - watch for file changes
* `entr` - watch arbitray file change
  * `entr bash -c "clear;./greet" <<< greet` - watch program greet for changes
  * `entr bash -c "clear;./greet NAME" <<< greet` - watch program greet plus input for changes
* `bc` - an arbitrary precision calculator

## Parameter Expansion

* `${what} - The value of what is substituted.
* `${what#* } - cut everything to the first space in what (left to right)
* `${waht##* } - cut everything to the last word. (left to right)
* `${what% *} - cut everything to the first space in what (right to left)
* `${what%% *} - cut everything to the first word. (right to left)

# Tips
 * Get good with basic `vim` commands and just repeat with .
 * Never use extensions on executables on UNIX/Linux
 * Use `command -v` instead of `which` in scripts
 * Make sure you grok `/usr/bin/env` and `PATH` dangers
 * Grok pros and cons of aliases, functions, and commands
 * Precede anything with backslash to disable aliases, functions
 * Use `env` to see environment variables
 * Grok shell return codes
 * Grok integers, bits, bytes, and bases (binary, decimal, octal, hex, base64)
 * Use obase=2 to convert to binary from decimal
 * Grok basic bash/shell data types: number/integer, string, boolean
 * Remember, there are no floats in bash
 * Grok difference between single and double quoting strings
 * Grok "duck typing"
 * Grok code block and variable scope
