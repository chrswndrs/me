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

