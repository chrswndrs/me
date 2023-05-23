# Lunar Vim config

## Code folding

- `zR` - after configuring folding, this folds the whole file.
- `za` - toggle folding on current line.
- `zA` - same as `za` except it toggles files beneath too.
- `zc` - Close the current fold. 
- `zC` - same as above includes nested folds.
- `zo` - open the current fold. 
- `zO` - same as above but opens nested folds too.

## Telescope Default Mappings

- `<C-n>/<Down>` - Next item
- `<C-p>/<Up>` - Previous item
- `j/k` - Next/previous (in normal mode)
- `H/M/L` - Select High/Middle/Low (in normal mode)
- `gg/G` - Select the first/last item (in normal mode)
- `<CR>` - Confirm selection
- `<C-x>` - Go to file selection as split
- `<C-v>` - Go to file selection as vsplit

## LunarVim Mappings

- `<Space>lq` - Quickfix
- `<Space>ls` - Document Symbols 
- `<Space>lS` - Workspace Symbols 
- `<Space>ll` - CodeLens Action
- `<Space>lk` - Prev Diagnostic 
- `<Space>lj` - Next Diagnostic 
- `<Space>lw` - Diagnostics 
- `<Space>ld` - Buffer Diagnostics 
- `<Space>li` - Info 
- `<Space>le` - Telescope Quickfix 
- `<Space>lf` - Format 
- `<Space>la` - Code Action 
- `<Space>bj` - Jump 


# Avimitin Keymappings

- `Space` - leader key
- `;` - leader key
- `H` - Go to the first character of the line
- `L` - Go to the last character of the line
- `J` - Go down 5 lines
- `K` - Go up 5 lines
- `W` - Go 5 words forward
- `B` - Go 5 words Backward

## Cursor move in insert mode

- `ctrl h` - Act like Home
- `ctrl e` - Act like End
- `ctrl f` - Act like w in normal mode
- `ctrl b` - Act like b in normal mode

## Windows Navigation

- `;k` - Go to the window above
- `;j` - Go to the window below
- `;h` - Go to the right window
- `;l` - Go to the left window

## Windows resize

- `ctrl shift up` - Resize the top border of window
- `ctrl shift down` - Resize the bottom border of window
- `ctrl shift left` - Resize the left border of window
- `ctrl shift right` - Resize the right border of window

## Search

- `N` - Go to the before matches
- `n` - Go to the following matches
- `ESC` - Close the search highlight

## Tabpages

- `ctrl-t h` - Go to the previous tab
- `ctrl-t l` - Go to the next tab
- `ctrl-t n` - Create new tab

## Copy and Paste

- `y` - Copy to register
- `p` - Paste from the register
- `ctrl-p` - Paste from the clipboard (In normal and insert mode)
- `ctrl-y` - Copy to clipboard (Only in visual mode)

## Text move

- `<` - Reduce one indent level (In normal and selection mode)
- `>` - Increase one indent level (In normal and selection mode)

## Save and Quit

- `;w` - Save
- `;q` - Quit buffer (Auto quit nvim when last buffer in deleted)
- `;q` - Quit neovim, windows, tabs
- `Alt ;` - Leave the insert mode (Same as ESC) [not working properly]

## Scrolling

- `ctrl j` - Scroll down
- `ctrl k` - Scroll up
- `ctrl f` - Like "PgDown" key, scroll down half a page
- `ctrl b` - Like "PgUp" key, scroll up half a page
- `ctrl y` - Scroll up, but cursor will not move
- `ctrl e` - Scroll down, but cursor will not move

## Other

- `ctrl-z` - Reverse changes

# Mapped Commands in `Neovide`

## `Neovide`::Core:

- `,` - Map leader, nearly all my custom mappings starts with pressing the comma key
- `,q` or `\\`` - Toggle sidebar filetree viewer (nvim-tree.lua)
- `,r` - Refresh/source ~/.config/nvim/init.vim
- `,t` - Trim all trailing whitespaces
- `,a` - Auto align variables (vim-easy-align), eg. do ,a= while your cursor is on a bunch of variables to align their equal signs
- `,h` - Toggle rainbow parentheses highlighting (rainbow-parentheses.vim)
- `,j` - Set filetype to "journal" which makes the syntax highlighting beautiful when working on regular text files and markdown
- `,k` - Toggle coloring of hex colors
- `,l` - Toggle Limelight mode, highlight the lines near cursor only (Limelight)
- `,,` - Remove highlights (after searching with /)
- `<Tab>` - Next buffer
- `<Shift-Tab>` - Previous buffer
- `,$s` - New terminal in horizontal split
- `,$v` - New terminal in vertical split

## Python:

- `,d` - Automatically generate Python docstrings while cursor is hovering above a Python function or class (vim-pydocstring and doq)
- `,x` - Auto format Python scripts (yapf)

## Telescope:

- `,ff` - Find files
- `,fg` - Live grep from files
- `,fb` - Buffers
- `,fh` - Help tags
- `,fc` - Change colorscheme
- `,f/` - Fuzzy find current buffer

## Other mappings:

- `,c<Space>` - Toggle comment for current line (Nerd Commenter)
- `<Alt-r/c>` - Toggle RGB color picker (vCoolor) (uses GTK+, requires yad or zenity)

# Nvim config

## vimtex

- `,ll` - compile and live preview in zathura
