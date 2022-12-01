# Kubernetes overview

Google Cloud, Azure: don't charge for the Master
AWS: Do charge for Master.

- Master: server that coordinates everything else. Brain of the cluster.
- Nodes: worker endpoints (many containers on a node) could be VMs or
  containers.
- Pod: two or three containers that need to be deployed together.
- Service: is a group of pods that make up one backend.
- Deployments: is where you describe what you want the state of your
  pods to be and then kubernetes works to get your cluster into that
  state.

        #docker #kubernetes #overview #terms
