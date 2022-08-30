# Vim Commands

* ':r `which vic`' - reads to content from the vic bash script into the current buffer
* `!!` - puts you in ':.!', you write ':.!bash' to send the current line to bash and replace that line w/ the output
* `dap` - delete around paragraph, to make the whole paragraph pastable.
* `}` - jump to end of paragraph.
      * `}` and then `!!` and then `.,.!bash` sends the whole paragraph to the bash and replace with the output
```sh
for i in {1..10}; do
  echo $i. THING
done
```
* if the above is in shell buffer, get your cursor to beginning of for:
 - then do `}` to jump to end of paragraph (done)
 - then do `!!` you should see `:.,.+2!` in the command prompt (vim)
 - then type bash after the ! to send it bash and replace with output

* it should look like the below part

```txt
 1. THING
 2. THING
 3. THING
 4. THING
 5. THING
 6. THING
 7. THING
 8. THING
 9. THING
10. THING
```

* `:set OPTION` - set an option for current buffer. e.g. for linenumbers `set -o nu`
* `:help` - to get an comprehensive overview of what you can do with vim
* `gw` - format the line {motion} moves over.
* `cc` - change the current line.
* `~` - Make character uppercase.
- `CTRL-L` - clear the previously highlight, e.g. word searched w/ `*` (screen).
- `gUw` - Uppercase to the end of word
- `gUiw` - Uppercase entire word
- `guap` - Lowercase paragraph
- `zt` - reposition viewport so your current line is at the top
- `zz` - reposition viewport to middle
- `zb` - reposition viewport to bottom
- `:wa` - write all unsaved buffers
- `:xa/:wqa` - write all and quit
- `:qa!` - Quit Vim without saving
- `%s/https.*/[&]()/g` - Use & in your replacement pattern to insert the
  matched text.
- `d/foo` - delete forward until foo
- `c/\d` - change to next number
- `ctrl-o` - moves backwards through the jump list
- `ctrl-i` - moves forward through the jump list
- `:reg` - shows you the contents of your registers
- `:g/pattern/d` - Remove lines matching pattern
- `:g!/pattern/d` - Remove lines that do NOT match
- `da"` - Delete around quotes
- `di]` - Delete Inside brackets
- `ci(` - Change Inside braces
- `vaw` - Visually select Around Word
- `ctrl-a`, `ctrl-x` - will increment or decrement the next number on
  the line
- `:%!` - to filter the entire buffer through an external command.
- `ctrl-h` - Delete previous char in Insert Mode.
- `ctrl-w` - Delete previous word in Insert Mode. 
- `ctrl-u` - Delete entire line (except indent) in Insert Mode
- `ctrl-t` - Indent the current line in Insert Mode
- `ctrl-d` - Back Indent the current line in Insert Mode
- `vim some_file.name +/your_pattern` - Open a file directly to a
  pattern

