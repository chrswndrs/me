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

Related:
 - https://kinsta.com/de/blog/postgresql-replikation/#was-ist-postgresql-replikation
 - PostgresSQL Replication | Guide to the Working of PostgreSQL
   Replication

      #databases #postgresql #mirroring #data-persistency 
