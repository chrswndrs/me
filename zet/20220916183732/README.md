# How to use ssh-add on manjaro?

The problem was this message:
  - Could not open a connection to your authentication agent.

The Fix:
```sh
  eval `ssh-agent -s`
```
After executing eval ssh-agent, the agent was started and you could
easily add your key to the keychain.

```sh
  ssh-add ~/path/to/file
```

Related: 
 - https://gist.github.com/mvneves/a6a69a53f039b3755900

        #Unix #Linux #ssh #ssh-add #ssh-agent #keychain
