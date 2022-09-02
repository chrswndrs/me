# What is a Unified Logging Layer?

*Rigidity v. Flexibility:* Some interfaces are more rigid than others. 
For example, Protocol Buffer requires templates and versioning whereas 
`JSON` has no centrally managed templates or out-of-the-box versioning. 
More rigid interfaces are easier to manage but harder to evolve if the 
underlying data is evolving rapidly. More flexible interfaces can adapt 
to the changes better but can be harder to manage.

*Ubiquity:* Remember that the Unified Logging Layer's key goal is to 
connect various sources of log data to various destination systems 
(`NoSQL` databases, `HDFS`,`RDBMs`, etc.). Hence, it pays huge 
dividends to choose an interface with ubiquitous support.

For instance, `JSON` might be slower than a custom binary protocol. But
which database/data processing middleware supports such a custom
protocol? On the other hand, with `JSON`, log data can be stored as-is in
`MongoDB`.

The Unified Logging Layer must provide reliable and scalable data
transport. If all log data were to go through the Unified Logging Layer,
then it'd better be able to filter, buffer and route incoming data
robustly.

*Extensibility to Minimize Infrastructure Debt* 
The Unified Logging Layer must be able to support new data inputs (e.g.,
new web services, new sensors, new middleware) and outputs (new storage
servers, databases, API endpoints) with little technical difficulty.

To achieve this goal, the Unified Logging Layer should have a pluggable
architecture into which new data inputs and outputs can be "plugged".
Once a new data input is plugged in, no additional work should be
required to send that data to all existing data outputs and vice versa.

`Pluggable` architecture reduces an O(M*N)
problem to an O(M+N) one: with M data inputs and N data outputs, there
are M*N possible paths for log data. However, with a (well-designed)
pluggable architecture, only M+N plugins need to be written to support
M*N paths, and the cost of supporting a new data input or output is O(1)
(= just writing a plugin for said input/output).

The Unified Logging Layer is still in its infancy, but its strategic
significance is already underscored by open source projects such as
Kafka (`LinkedIn's` key data infrastructure to unify their log data) and
`Fluentd`. The reader is strongly encouraged to start thinking how to
evolve their organization towards building a Unified Logging Layer to
make sure they can take full advantage of all the information buried in
their log data.

Related:
  - https://www.fluentd.org
  - `20220902041719/README.md`
  - `20220902043235/README.md`

    #Unix #Linux #Docker #Logging #Log #Management #fluentd
    #unifiedLoggingLayer
