# Whar are Permissions?

(- rw- rw- r--)  drwxr-x--- 5 chrs chrs 4096 Aug 12 03:32 .
- first dash = directory (indicated by d) or file (indicated by -)
- second is user permissions
- third is group permissions
- fourth is other (world) permissions

d, if it is a directory indicated on the beginning of permissions, file, - 
  rwx -> u, user
  r-x -> g, group
  --- -> o, other

+x on a directory means the ability to see (list) things inside the directory.

    #unix #linux #permissions
