# Linux Commands

* `man` - show manual information about a command

## Listing Files / Info about Files, Directories, System

 * `ls` - list the files in the (current) directory
 * `ls -al` - list all the files including hidden (begin with .)
 * `ls -ld` - show me the permissions of the current directory
 * `ls -i` - list the index for inode
 * `ls -l` $(which sudo) - list perms for sudo command $() = command substitution
 * `pwd` - print working directory
 * `hostname` - display name of host
 * `ip a` (ipconfig forwardslash all, on windows) - show all ip addresses
 * `ip -c a` - show all ip addresses in color
 * `which ssh` - display full path to ssh program
 * `type ssh` - display what type of thing it is, shows if a command is a builtin or external command,
      better than which because you could see if the cmd is being overwritten (sec reason)
 * `who` - display who is logged in and how
 * `w` - display logger version of  who is logged in
 * `whoami` - print effective user name/id
 * `users` - short name of all logged in users
 * `last` - summary of last logged in users
 * `id` - display user and group names and ids for self
 * `exit` - exit the current program or login or shell
 * `| less` or `| more` (q to quit) - see scrolled output in terminal
 * `ctrl-c` - interrupt whatever (exit)
 * `ctrl-d` - send "end of data/file"
 * `stat foo` - see all the details about the foo inode
 * `mv foo other` - change file/directory foo name to other (or move)
 * `mv -i foo other` - change files name but protect against overwrite
 * `cp foo other` - copy file/directory foo to other
 * `cp -ar foo another` - recursively copy foo to another keeping timestamps
 * `touch` - create new text file or update last modified timestamp
 * `rmdir foo` - remove an empty foo directory
 * `rm -rf foo` - remove directory or file foo and everything in it
 * `grep jill /etc/passwd` - list onliy line containing jill
 * `file foo` - gives Information on what kind of file foo is

## Navigation Commands, Copying / Moving Files

 * `mv` - change location of a file or rename
 * `cd foo` - change into the foo directory
 * `cd`, `cd ~` - change back to the home directory
 * `cd ..` -  change into the relative parent directory
 * `cd ../..` -  change into the relative parent of the parent directory
 * `cd -` - change to previous directory
 * `cd /` - change to the root directory
 * `clear` - clear the screen

## Finding Files

 * `find .` - sort of the same as ls -l1
 * `find . -ls` - same as above + more information
 * `find . -name '???'` - find file/directories with three letter name
 * `find . -path '*.git*'` - find files/dirs with git anywhere in path
 * `find . -type f` - list all the files in current directory
 * `find . -type f -name ".*"` - list all the files that start with a dot
 * `find . -type d -name ".*"` - list all directories that start with a dot
 * `find . -mtime -1` - find anything that was changed in the last 24 hours
 * `find . -mtime +1` - find anything that was changed older than last 24 hours
 * `find . -mmin -60` - find anything that was changed in the last 60 minutes
 * `find ~ -mmin -5 2>/dev/null` - file changed in the last five minutes
 * `find directory -user root -perm 4000 -exec ls -ldb {} \; >&tmp/filename`

## Redirecting, Filtering, Paging, Piping, Silencing Errors

 * `less` - page output to one screen (less is cleaner, has color)
 * `more` - page output to one screen (more is older)
 * `find ~ -name '.*' 2>/dev/null | head | nl` - find all dotfiles, supress error and only show top 5 line with linenumbers
 * `2>/dev/null` - silence errors
 * `head -5 foo` - show top five lines of foo file
 * `tail -5 foo` - show last five lines of foo file
 * `tac foo` - reverse lines of foo file
 * `wc -l` - print count of line
 * `nl` - add line numbers to output
 * `sort` - sort output
 * `tee /tmp/foo` - both writes to a file foo and to stdout
 * `lolcat` - colorize things
 * `cowsay` - fun way to show output

## Redirection operators

 * `>` - (over) write to file
 * `>>` - append lines to a file
 * `|` - connect stdout to stdin
 * `<` - send File to stdin


## Sudo Commands

 * `sudo shutdown -h now` - (-h halt, shutdown in the current state)
 * `init 0` - the same thing as a poweroff
 * `sudo apt` - use interactively only (use apt-get in scripts)
 * `sudo apt update` - update all the sources for packages
 * `sudo apt upgrade` - upgrade all packages to latest version
 * `sudo apt search ˆneo` - search for all packages that start with neo
 * `sudo apt install neofetch` - install neofetch and dependencies
 * `sudo apt remove neofetch` - removes neofetch
 * `sudo apt autoremove` - automatcally remove unused packages
 * `sudo apt purge packagename` - removes package and config files (still need to autoremove if you want to remove deps)
 * `sudo apt autoremove --purge` - remove packages, deps and config files
 * `sudo adduser foo` - interactively add a  user named foo (not RedHat)
 * `sudo passwd foo` - change the password for foo
 * `sudo passwd` - change own password
 * `sudo deluser foo` - remove user foo
 * `sudo su -` - effectively login as root without logging out the dash gives you a login shell
 * `sudo su - foo` - effectively login as foo

## Permission Commands

 * `stat -c '%a'` - to see octal permissions
 * `chmod u+r` - give read permissions to user
 * `chmod g+r` - give read permissions to group
 * `chmod o+r` - give read permissions to other
 * `chmod +x` - give executable to user, group, other
 * `chmod u-r` -  remove read permissions for user
 * `chmod -x` - remove executable for user, group, other
 * `chown rando foo` - change ownership of foo to rando

## Setting Options for Shell, Standard Output

 * `set -o vi` - set console to vi-mode
 * `set -o noclobber` - stop from blowing away files
 * `echo foo` - write foo to standard output
 * `cat foo` - write content of foo file to standard output


## Virtual Box Commands

* `vboxmanage startvm VMNAME --type headless` - start vm headless from console
* `vboxmanage list vms` - list all installed vms
* `vbosmanage list runningvms` - list all running vms
* `vboxmanage controlvm VMNAME power off` -  power off headless vm

## SSH Commands

* `ssh user@ip` -  to login over ssh to a running machine
* `scp foo target:` - copy foo from host to remote target home dir (def)

# Unix Commands

- `lsof -nP -iTCP -sTCP:LISTEN` - check which ports are used
