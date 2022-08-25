# Sending Both Output and Error Messages to Different Files

You are expecting output from a program but you don't want it to get littered with error messages.

```bash
myprogram 1> messages.out 2> messages.err

# or more commonly

myprogram > messages.out 2> messages.err
```

In the construct 1> and 2> the number is the file descriptor, so 1 is STDOUT and 2 is STDERR.
When no number is specified, STDOUT is assumed.
