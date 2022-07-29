# How to get the Isosec as Folder as output in shell?

If you want something like 20220729010550 as output in shell you have to simply use the date command with some additional flags.
the command will look like this:

```sh
  date +%Y%m%d%H%M%S
```

The +% will format as you want e.g +%Y = Year. etc

- +%Y: Year
- +%m: Month
- +%d: Day
- +%H: Hour
- +%M: Minute
- +%S: Second

References:

  https://unix.stackexchange.com/questions/374389/formatting-the-date-in-bash
  
      #shell #bash #date
