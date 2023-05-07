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
