# Linux Commands

 * ls 
   list the files in the (current) directory
 * ls -al
   list all the files including hidden (begin with .)
 * man
   show manual information about a command
 * pwd
   print working directory
 * shutdown -h now
   (-h halt, shutdown in the current state)
 * init 0 
   the same thing as a poweroff
 * mv
   change location of a file or rename
 * apt
   use interactively only (use apt-get in scripts)
 * apt update 
   update all the sources for packages
 * apt upgrade
   upgrade all packages to latest version
 * apt search (caret)neo
   search for all packages that start with neo
 * apt install neofetch
   install neofetch and dependencies
 * apt remove neofetch
   removes neofetch
 * apt autoremove
   automatcally remove unused packages
 * apt purge packagename
   removes package and config files (still need to autoremove if you want to remove deps)
 * apt autoremove --purge
   remove packages, deps and config files
 * hostname
   display name of host
 * cd foo
   change into the foo directory
 * cd, cd ~
   change back to the home directory
 * cd ..
   change into the relative parent directory
 * cd ../..
   change into the relative parent of the parent directory
 * cd - 
   change to previous directory
 * ch /
   change to the root directory
 * clear
   clear the screen
 * ip a (ipconfig forwardslash all, on windows)
   show all ip addresses
 * which ssh
   display full path to ssh program
 * type ssh
   display what type of thing it is, 
   shows if a command is a builtin or external command,
   better than which because you could see if the cmd is being overwritten (sec reason)
 * who 
   display who is logged in and how
 * w 
   display logger version of  who is logged in
 * whoami
   print effective user name/id
 * users
   short name of all logged in users
 * last
   summary of last logged in users
 * id 
   display user and group names and ids for self
 * exit
   exit the current program or login or shell
 * | less or | more (q to quit)
   see scrolled output in terminal
 * ctrl-c
   interrupt whatever (exit)
 * ctrl-d
   send "end of data/file"
   
## Virtual Box Commands

* vboxmanage startvm VMNAME --type headless
   start vm headless from console
* vboxmanage list vms
   list all installed vms
* vbosmanage list runningvms
   list all running vms
* vboxmanage controlvm VMNAME poweroff
   power off headless vm

## SSH Commands
   
* ssh user@ip
  to login over ssh to a running machine

# Docker Commands
