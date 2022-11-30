# What is the difference between COPY and ADD in Dockerfile?

COPY: If you are doing stuff just with the local filesystem, use COPY it
is safer.

ADD: has other features to it.
 - can add github url
 - can untar, unzip, etc.
 Add can go out to the network and can download files. Add can also
 automatically unzip or untar a file.

      #Docker #container #build #Dockerfile #COPY #ADD #devops
