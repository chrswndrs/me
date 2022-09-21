# What does WAL mean in postgresql? 

WAL in postgres stands for Write-Ahead Logging and is a standard method
for ensuring data integrity. A detailed description can be found in most
(if not all) books about transaction processing. Breifly, WAL's central
concept is that changes to data files (where tables and indexes reside)
must be written only after those changes have been logged, that is,
after log records describing the changes have been flushed to permanent
storage.

Related:
 - Postgresql Documentation: Write-Ahead Logging (WAL)

          #PostgreSQL #postgresql #databases #replication #WAL
