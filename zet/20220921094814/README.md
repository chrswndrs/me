# What does WAL mean in postgresql? 

WAL in postgres stands for Write-Ahead Logging and is a standard method
for ensuring data integrity. A detailed description can be found in most
(if not all) books about transaction processing. Breifly, WAL's central
concept is that changes to data files (where tables and indexes reside)
must be written only after those changes have been logged, that is,
after log records describing the changes have been flushed to permanent
storage.

Tip: Because WAL restores database file contents after a crash,
journaled file systems are not necessary for reliable storage of the
data files or WAL files. In fact, journaling overhead can reduce
performance, especially if journaling causes file system data to be
flushed to disk. Fortunately, data flushing during journaling can often
be disabled with a file system mount option, e.g. `data=writeback` on a
Linux ext3 file system. Journaled file systems do improve boot speed
after a crash.

Related:
 - Postgresql Documentation: Write-Ahead Logging (WAL)

          #PostgreSQL #postgresql #databases #replication #WAL
