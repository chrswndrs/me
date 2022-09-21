# What is PostgreSQL Replication?

Postgresql replication is a process in which you would have a primary
Database and you replicate that data to on to a replicate server to
preserve the data and prevent data loss.

postgresql follows a simple replication model in which the writing of
data will be sent to primary node. This primary node can take the
changes and send them to a secondary node.

Note that the single-user mode server does not provide sophisticated
line-editing features (no command history, for example). Single-user
mode also does not do any background processing, such as automatic
checkpoints or replication.

In postgresql, there is usually one database server on which all the
modification relate operations and requests are served. Those changes
are applied to other database servers called the slave servers or
standby database servers. That means the master nodes are always the
replicated data's senders while slave nodes receive the replicated data
and apply the same changes over there.

The master server is always a sending server, and all these settings are
required to be set on that server, however in the case where the slave
servers also function as sending servers, as in cascading, these
settings need to be set on those servers too.

- max_wal_senders(integer)
  This parameter specifies the maximum number of allowed connections
  with other slave database servers at a single instance are allowed.
- wal_keep_segments(integer)
  The standby servers require 16-megabytes segments of past log files
  that are stored in the pg_xlog directory for streaming replication in
  Postgres. This parameter specifies the minimum number of those
  segments that are required by the standby servers for proper
  replication to be performed. This parameter's value can either be set
  from the server command line prompt or postgresql.conf configuration
  file of PostgreSQL.
- replication_timeout(integer)
  If the standby servers are crashed, or some network issues occur, then
  the connection to that server needs to be terminated. This parameter
  specifies that after how much time span the connection should be
  terminated if no response is being received. This parameter's default
  value is set to 60 seconds and can only be modified from the server
  command line prompt or postgresql.conf configuration file of
  PostgreSQL.

Related:
 - https://kinsta.com/de/blog/postgresql-replikation/#was-ist-postgresql-replikation
 - PostgresSQL Replication | Guide to the Working of PostgreSQL
   Replication

      #databases #postgresql #mirroring #data-persistency 
