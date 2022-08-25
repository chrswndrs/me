# Outputting or Redirecting in bash

Common error in redirecting to a file is that you used the wrong File
descriptor, e.g. `STDOUT >` when trying to output `STDERR 2>`
When outputting something to a file. Try to remember what you're
outputting or redirecting!

- Normal Output meaning `STDOUT` `1> or >`
- Error Messages, etc. meaning `STDERR` `2>`


Related: 
 - man bash `/File descriptors`

    #Unix #Linux #bash #fileDescriptors
