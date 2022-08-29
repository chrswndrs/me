# What is logrotate on Linux?

`logrotate` is designed to ease administration of systems that generate
large numbers of log files. It allows automatic rotation, compression,
removal and mailing of log files. Each file may be handled daily,
weekly, monthly, or when it grows to large.

Any number of `config` files may be given on the command line. Later
`config` files may override the options given in earlier files, so the
order in which the `logrotat config` files are listed is important.

Each configuration file can set global options (local definitions
override global ones, and later definitions override earlier ones) and
specify logfiles to rotate.

Related: 
 - `man logrotate`

      #Unix #Linux #logging 
