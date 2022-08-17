# What is setuid?

Sets the effective User ID of the calling Process. If the calling process is priviledged (has CAP_SETUID capabilities),
the real UID and saved set-user-UID are also set.

- Under Linux, setuid is implemented like the POSIX version (_POSIX_SAVED_IDS) feature.

This allows a set-user-id (other than root) program to drop all of its users priviledges, do some un-priviledged work, 
and then reengage the original effective UID in a secure manner.



  Related:
    - https://news.hitb.org/content/dangers-setuid
    
    
      #Unix #Linux #setuid #permissions
