# What is the difference between bind mount vs volumes in docker?

If you have data that is only for the container, and not for the host,
use volumes. Prefer Volumes over Bind mounts.

Bin mounts only if you want a specific interactive connection between
host machine and container.

      #docker #bindMount #volumes #bind #mount
