# OCI - (Non Docker) Containers

OCI: Open Container Initiative, Docker is part of OCI.

- Buildah
  buids the containers for you. Docker builds the containers for you.
  `buildah bud` - bud stands for build using Dockerfile.

buildah builds OCI container, it will work seemlesly with Docker and
dockercontainer.


- Podman
  executes the containers. docker.d (docker demon) runs them for you.
  `podman --cgroup-manager cgroupfs -p 3000:3000` - podman needs cgroup
  manager.

podman executes these builds also seemlesly with docker.

  Buildah and Podman can have use cases, Problem & Problem set
  searchability is better for Docker because it is around longer.

Related:
 - Docker-Swarm
 - Apache Mesos
 - Hashicorp Nomad
 - lxc & lxd - Docker used to be based on these technologies.
 - rkt - fits much more of Docker use case. Core rkt is idea of pods.
 - CoreOS Container Linux
 - RenderOS
 - Ubuntu
 - DC/OS
 - VMWare Photon

        #docker #OCI #buildah #podman
