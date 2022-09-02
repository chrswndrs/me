# What is `Fluentd`?

`Fluentd` is a cross platform open-source data collector, which lets you
unify the data collection and consumption for a better use and
understanding of data.

Key features:

- *Unified Logging with `JSON`*
  `Fluentd` tries to structure data as `JSON` as much as possible: this
  allows it to unify all facets of processing log data:
    - collecting,
    - filtering,
    - buffering and
    - outputting logs
  across multiple sources and destinations (Unified Logging Layer).
  The downstream data processing is much easier with `JSON`, since it
  has enough structure to be accessible while retaining flexible
  schemas.
- *Pluggable Architecture*
  It has a flexible plugin system that allows the community to extend
  its functionality. Community-contributed plugins connect to dozens of
  data sources and data outputs.
- *Minimum Resources Required*
  The vanilla instance runs on 30-40MB of memory and can process 13,000
  events/second/core. If you have tighter memory requirements (-450kb),
  check out `Fluent Bit`, the lightweight forwarder for `Fluentd`.
- *Built-in Reliability*
  It supports memory- and file-based buffering to prevent inter-node
  data loss. It also supports robust failover and can be set up for high
  availability.

  Related: 
   - https://www.fluentd.org

      #Unix #Linux #Docker #Logging #Log #Management #fluentd
