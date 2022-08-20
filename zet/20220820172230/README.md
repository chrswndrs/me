# How do you generate a ssh key

`ssh-keygen -t ed25519 -C "your_email@example.com"`

If you're on Mac do: `ssh-add -K ~/.ssh/YOUR-KEY`, this will add the key to keychain and prevent password prompting.

Related:
 - https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
 - https://stackoverflow.com/questions/2643502/git-how-to-solve-permission-denied-publickey-error-when-using-git

    #Unix #Linux #ssh #ssh-keygen
