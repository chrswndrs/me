# Play around with nvim config of avimitin

If you just wanna have a try and do not want to mess up your local
environment? 

```Docker
docker run -w /root -it --rm alpine:edge sh -uelic '
  apk add git neovim ripgrep alpine-sdk --update 
  git clone 'https://github.com/Avimitin/nvim'\~/.config/nvim 
  nvim -c "autocmd User PackerComplete quitall" 
  nvim /root/.config/nvim/README.md '
```
Related:
 - https://avimitin.github.io/nvim/en_us/installation.html

    #editor #nvim #lua #Packer
