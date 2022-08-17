# What is the difference between /tmp and /dev/shm?

`/tmp`: is exactly made for storange files temporarly with some kind of persistence. On my systems, /tmp is a tmpfs as well, in contrast to /var/tmp which is designed for putting larger files, potentially staying longer.
It is more widely supported

`/dev/shm`: is intended for a very special purpose, not for files to be put to by arbitrary programs. It is very fast, because
it is stored in filesystem-level shared-memory.
(shm is also backed implicitly by the disk when you have a swapfile)?


 Related:
  - https://stackoverflow.com/questions/9745281/tmp-vs-dev-shm-for-temp-file-storage-on-linux
  - https://www.cyberciti.biz/tips/what-is-devshm-and-its-practical-usage.html
 
      #Unix #Linux #tmpx #dev/shm


