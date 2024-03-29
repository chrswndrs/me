# Vim Commands

## Tips

* http://www.fprintf.net/vimCheatSheet.html
* Did you know that Vim can increment hex, binary, and octal numbers
  with `ctrl-x` and `ctrl-a`? In fact, it can even increment letters.
* Did you know you can use any regex delimiter in your pattern
  substitution? No need to use / at all, try # instead (check bindings
  section).
* Interesting Substitution Reference:
  https://www.reddit.com/r/vim/comments/h01yhh/late_night_monster_regex_capitalize_all_sentences/
* Learning Vim Regex:
  https://dev.to/iggredible/learning-vim-regex-26ep
* http://yannesposito.com/Scratch/en/blog/Learn-Vim-Progressively/
- Use `ctrl-k` + 2 letters to add special chars:
  - `oo -> bullet`
  - `Db -> diamond bullet`
  - `Pd -> pound`
  - `Eu -> Euro`
  - `-N -> en dash` 
  - `-M -> em` 
- Instead of confirming every substitution, print them all out for a
  quick review at a glance:
  - `:g/MATCH/#|s/MATCH/REPLACE/g|#`

## Bindings

- `=`, `==` - indent code
  - `4==` - indent current line and next 3
  - `=ap` - indent around paragraph
  - `=%` - indent to end of method
- `:changes` - to see the change list
  - `g;`, `g,` - to jump to the locations of the changes
* `\`.` - backtick dot; takes you to the last cursor position after reopening the file.
* ':r `which vic`' - reads to content from the vic bash script into the current buffer
* `!!` - puts you in ':.!', you write ':.!bash' to send the current line to bash and replace that line w/ the output
* `dap` - delete around paragraph.
- `das` - delete a sentence with cursor anywhere in sentence.
- `cas` - change a sentence
* `d/PATTERN` - delete to the next match of PATTERN.
* `d?PATTERN` - delete to the previous match of PATTERN.
* `yap` - yank around paragraph.
* `}` - jump to end of paragraph.
* `:set OPTION` - set an option for current buffer. e.g. for linenumbers `set -o nu`
* `:help` - to get an comprehensive overview of what you can do with vim
* `gw` - format the line {motion} moves over.
* `cc` - change the current line.
* `~` - Make character uppercase.
* `CTRL-L` - clear the previously highlight, e.g. word searched w/ `*` (screen).
* `gUw` - Uppercase to the end of word
* `gUiw` - Uppercase entire word
* `guap` - Lowercase paragraph
* `zt` - reposition viewport so your current line is at the top
* `zz` - reposition viewport to middle
* `zb` - reposition viewport to bottom
* `:wa` - write all unsaved buffers
* `:xa/:wqa` - write all and quit
* `:qa!` - Quit Vim without saving
* `%s/https.*/[&]()/g` - Use & in your replacement pattern to insert the
  matched text.
* `d/foo` - delete forward until foo
* `c/\d` - change to next number
* `ctrl-o` - moves backwards through the jump list
* `ctrl-i` - moves forward through the jump list
* `:reg` - shows you the contents of your registers
* `:g/pattern/d` - Remove lines matching pattern
* `:g!/pattern/d` - Remove lines that do NOT match
* `da"` - Delete around quotes
* `di]` - Delete Inside brackets
* `ci(` - Change Inside braces
* `vaw` - Visually select Around Word
* `ctrl-a`, `ctrl-x` - will increment or decrement the next number on
  the line
* `:%!` - to filter the entire buffer through an external command.
* `ctrl-h` - Delete previous char in Insert Mode.
* `ctrl-w` - Delete previous word in Insert Mode. 
* `ctrl-u` - Delete entire line (except indent) in Insert Mode
* `ctrl-t` - Indent the current line in Insert Mode
* `ctrl-d` - Back Indent the current line in Insert Mode
* `vim some_file.name +/your_pattern` - Open a file directly to a
  pattern
* instead of using `.*` use `\.{-}` to more accurately match pattern 
* `ga` - see details about the character under the cursor. (hex code)
* `:colder` - previous Quickfix list
* `:cnewer` - next Quickfix list
* Pasting into Vim from `StackOverflow`? Avoid indent fail by using `set
  :paste` or use the system clipboard with `"*p`.
* `gv` - reselect the last visual selection
* `:%norm` - to perform a normal mode command on every line of the file.
* `g;` - to jump back to your last change in Vim
* `:changes` - Show list of changes
* `g,` - jump to next change
* `:sort` - sort all lines
* `:sort!` - sort in reverse
* `:sort u` - remove dupes and sort
* `:sort i` - ignore case
* `:sort n` - sort numerically
* `]m` - jump to beginning of next method
* `]M` - end of next method
* `[m` - beginning of previous method
* `[M` - end of previous method
* `:&` - repeat but reset flags
* `:&&` - repeat and keep flags
* `:%&` - repeat on file, reset flags
* `:%&&` - repeat on file, keep flags
* `:g/MATCH/#|s/MATCH/REPLACE/gl#` - Instead of confirming every
  substitution, print them all out for a quick review at a glance.
* `%S/pattern/replacement/g` - Use Abolish to preserve the original case
  during substitution. 
* `:h ex-cmd-index` - get a list of all EX commands.
* `:map`, `:map!`, `:nmap` - quickly check the current mappings
* Use `ctrl-k +2 letters` to add special characters:
  - `oo` - bullet
  - `Db` - diamond bullet
  - `Pd` - pound sterling
  - `Eu` - euro symbol
  - `-N` - en dash
  - `-M` - em
* `:s#/usr/local/bin#/usr/sbin#g` - this avoids escaping slashes
* `:undolist` - view the change tree
  - `g-`, `g+` - navigate the undo branches
* `/b\%[acon]` - search for optional, sequential match.
  - for more `:h\%[]`.
* `ctrl-x`, `ctrl-f` - to autocomplete filenames in Vim.

## Spellchecking

* `:set spell spelllang=de_de` - set spelllang to german.
* `:setlocal spell spelllang=de_de` - set spell off in local buffer.
* `:set nospell` - turn off spell correction.
* `]s`, `[s` - move to a misspelled word.
* `z=` - with cursor on misspelled word, this will suggest a list.
* `zg` - add word to spell dictionary.
* `zw` - marks word as incorrect.
* `ctrl-p`, `ctrl-n` - abbreviations and mappings, and spell-checking
  makes it a killer editor to write in.
* `f.` - jump on next occurrence of `.`.
* `F.` - jump on previous occurrence of `.`
* `t.` - jump before occurrence of `.`.
* `T.` - jump before previous occurrence of `.`.


## `Netrw` - Vim's built in filesystem plugin

* `%` - Create file
* `d` - Create directory
* `D` - Delete
* `R` - Rename

## Bash Command expansion into Vim Buffer


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

## Webstorm Ideavimrc bindings

`nnoremap ,e :action SearchEverywhere<CR>`
`nnoremap ,g :action FindInPath<CR>`
`nnoremap ,s :action FileStructurePopup<CR>`

`nnoremap gd :action GotoDeclaration<CR>`
`nnoremap gs :action GotoSuperMethod<CR>`
`nnoremap gi :action GotoImplementation<CR>`
`nnoremap gb :action JumpToLastChange<CR>`

`nnoremap U :action FindUsages<CR>`
`nnoremap R :action RenameElement<CR>`

`nnoremap == :action ReformatCode<CR>`
`vnoremap == :action ReformatCode<CR>`

`nnoremap cc :action CommentByLineComment<CR>`
`vnoremap cc :action CommentByLineComment<CR>`

`nnoremap <C-CR> :action ShowIntentionActions<CR>`

`nnoremap ,a :action GotoAction<CR>`
`vnoremap ,a :action GotoAction<CR>`
`vnoremap ,a :action GotoAction<CR>`

## Macros

Use the normal command in Ex mode to execute the macro on multiple/all
lines:
Execute the macro stored in register a on lines 5 through 10.
- `:5,10norm! @a`

Execute the macro stored in register a on lines 5 through the end of the
file.
- `:5,$norm! @a`

Execute the macro stored in register a on all lines.
- `:%norm! @a`

Execute the macro store in register a on all lines matching pattern.
- `:g/pattern/norm! @a`

To execute the macro on visually selected lines, press V and the j or k
until the desired region is selected. Then type :norm! @a and observe
the that following input line is shown.
- `:'<,'>norm! @a`

- `:g/pattern/normal! @a`
- `[number of times to apply the macro] @ [register]` -> `1000@q`
