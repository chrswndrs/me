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
- `(echo at the beginning; cat hello.txt) > hello.txt_ && mv
  hello.txt{_,}` - put "at the beginning into the beginning of the file
  hello.txt
- `$OSTYPE` stores the name of the Operating System.
- `compgen -k` - find out what keywords are available for your shell.
- `compgen -c` - find out what commands are available for your shell.
- `compgen -b` - find out what built-ins are available for your shell.

## Parameter Expansion

* `"$@"` - pass arguments as separate words.
* `"$*"` - pass arguments squished together as single word.
- `=~` - additional binary operator for regex, checks if right matches
  left, when yes exit 0, if not exit 1, if matching is not correct 2
- `$#` - retrieve the length or the number of arguments passed via cli
- `&>` - redirects both the standard output and the standard error
- `$?` - get the exit status of the command previously passed.
- `$$` - stores the PID of the current shell
- `2>&1` - redirects both standard output and standard error to STDOUT
* `${what}` - The value of what is substituted.
* `${what#* }` - cut everything to the first space in what (left to right).
* `${waht##* }` - cut everything to the last word. (left to right).
* `${what% *}` - cut everything to the first space in what (right to left).
* `${what%% *}` - cut everything to the first word. (right to left).
* `${what//o/0}` - Replace every occurance of `o` with `0`.
* `${what/toBeReplaced/withThis/}` - Replace `toBeReplaced` with `withThis`.
* `${parameter^pattern}` - uppercase first character.
* `${parameter^^pattern}` - All Caps.
* `${parameter,pattern}` - lowercase first character.
* `${parameter,,pattern}` - All lowercase.
* `set -e`- stop running when *any* error occurs
* `set -exo pipefail` - for debugging add/remove x in option. add -exo for debugging.
* `set -o pipefail` - the return value of the pipeline is the status of last command to exit with non-zero status  
- `cat <<EOM STRING EOM` - prints the STRING exactly as what you have
  here. Its called a here variable.
- `cat <<'EOM' STRING EOM` - will not do replacement.
- `:` - empty operator, you can put it in functions in bash to prevent
  errors.
  - `: #TODO put something here` - this would be inside of a function.
- `read line` - read a user line of input.
        
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

# ZSH

 - `fg` - works a little bit different in zsh, if you're used to fg N,
   where N is the job number you have to do it like this in zsh:
    - `fg %N`
