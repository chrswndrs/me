# What is the fluentd logging driver for Docker? 

The fluentd logging driver sends container logs to the Fluentd collector
as structured log data. Then, users can use any of the various output
plugins of Fluentd to write these logs to various destinations.

In addition to the log message itself, the fluentd log driver sends the
following metadata in structured log messages:

Field Description
- `container_id` - The full 64-character container ID.
- `container_name` - The container name at the time it was started.
  If you use `docker rename` to rename a container, the new name is not
  reflected in the journal entries.
- `source stdout` or `stderr`
- `log` - The container log

The docker logs command is not available for this logging driver

Related:

    #Unix #Linux #docker #logging
