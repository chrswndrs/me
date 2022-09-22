# How do you store ssh-key passphrases permanently on Mac?

If you haven't already, create an `~/.ssh/config` file. In other words, 
in the .ssh directory in your home `dir`, make a file called `config`.

In that `.ssh/config` file, add the following lines:
```sh
 Host *
   UseKeychain yes
   AddKeysToAgent yes
   IdentityFile ~/.ssh/id_rsa
```
Change `~/.ssh/id_rsa` to the actual filename of your private key. 
If you have other private keys in your ~/.ssh directory, also add an
`IdentityFile` line for each of them. For example, I have one additional
line that reads `IdentityFile ~/.ssh/id_ed25519` **for a 2nd private
key**.

The `UseKeychain` yes is the key part, which tells SSH to look in your
`OSX keychain` for the key passphrase.

Related:
 - https://apple.stackexchange.com/questions/48502/how-can-i-permanently-add-my-ssh-private-key-to-keychain-so-it-is-automatically

    #Unix #ssh #ssh-add #keychain
