# What is Treesitter?

1) Treesitter is a syntax highlighting engine that can be configured with
lua.
The goal of nvim-treesitter is both to provide a simple and easy way to
use the interface for tree-sitter in Neovim and to provide some basic
functionallity such as highlighting based on it.

Nvim-treesitter is based on three interlocking features: language,
parser, queries and modules, where modules provide features - e.g.
highlighting - based on queries for syntax objects extracted from a
given buffer by language parsers. Users will generally only need to
interact with parsers and modules.

2) Tree-sitter is a parser generator tool and an incremental parsing
library. I can build concrete syntax tree for a source file and
efficiently update the syntax tree as the source file is edited.

Related:
 - 1) https://github.com/nvim-treesitter/nvim-treesitter
 - 2) https://tree-sitter.github.io/tree-sitter/ 

    #IDE #nvim #neovim #highlighting #tree-sitter #nvim-treesitter
