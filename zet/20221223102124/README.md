<<<<<<< HEAD
# Cron Job Syntax

```
+--------------------------- minute (0 - 59)
|   +----------------------- hour (0 - 23)
|   |   +------------------- day of month (1 - 31)
|   |   |
|   |   |   +--------------- month (1 - 12) or jan, feb, ...
|   |   |   |
|   |   |   |   +----------- day of the week (0 -6) (Sun=0||7)
|   |   |   |   |
|   |   |   |   |
*   *   *   *   * command to be executed
```
=======
# How do I log into Fluentd container?

This is a 4 step process. 

  - Step 1: Create the Fluentd configuration file

    `<source>`
      `  @type forward`
      `  port 24224`
      `  bind 0.0.0.0`
    `</source>`

    `<match *>`
       ` @type stdout`
    `</match>`

  - Step 2: Start Fluentd

    `$ docker run -it -p 24224:24224 -v
    $(pwd)/demo.conf:/fluentd/etc/demo.conf -e FLUENTD_CONF=demo.conf
    fluent/fluentd:latest`

  - Step 3: Start Docker container with Fluentd driver
    
    Start:
    `docker run --log-driver=fluentd ubuntu echo "Hello Fluentd!"`

    Output:
    `Hello Fluentd!`

  - Step 4: Confirm.

    Should look similar to this:
    `2019-08-21 00:52:28.000000000 +0000 ece4524df531:
    {"source":"stdout","log":"Hello
    Fluentd!","container_id":"ece4524df531ed6ded4253c145a53bead9b049241aa12c5a59ab83e3a14a96b4","container_name":"/inspiring_montalcini"}`
>>>>>>> 60a16baaf3e195e45f69ed4217cc03e98cc88a5e
