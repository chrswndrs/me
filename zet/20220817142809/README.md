# How to own somebody using env in their shebang?

It finds the first occurence of the thing in the path e.g. ../env bash would be first occurence of bash,
../env python3 would be the first occurence of python3

If you want to own somebody that has deployed /usr/bin/env python3, just find a way to put a binary in the path 
ahead of the main program.
You can cause that program to run your program!

The way to do it safely is to put an explicit path in the shebang.


Related:
 - https://docs.devincud.com/posts/linux-privilege-escalation/
 - https://book.hacktricks.xyz/linux-hardening/privilege-escalation
 - https://www.hackingarticles.in/linux-privilege-escalation-using-path-variable/
 - https://jmmv.dev/2016/09/env-considered-harmful.html


    #Unix #Linux #env #shebang #path #Security
