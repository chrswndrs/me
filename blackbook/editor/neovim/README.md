# Lunar Vim config

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

