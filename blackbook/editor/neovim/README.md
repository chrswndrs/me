# Custom Mapped Commands in Normal Mode

## Core:

- `,` - Map leader, nearly all my custom mappings starts with pressing the comma key
- `,q` or `\\` - Toggle sidebar filetree viewer (nvim-tree.lua)
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
