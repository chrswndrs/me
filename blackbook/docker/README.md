# Docker Cheat sheet

- `docker kill $(docker ps -q)` - Stop all running containers
- `docker rm $(docker ps -a -q)` - remove all stopped containers
- `docker rmi $(docker images -q)` - remove all images

## Build Docker images
```bash
cd /path/to/Dockerfile
docker build . 
``` 

## View all running processes
```bash
docker ps
```

## View all processes
```sh
docker ps -a
```

## Run an image in a new Container
```sh
docker run -d <image-name>
```

## Run an image in interactive mode with the command /bin/bash
```sh
docker run -it <image-name> /bin/bash
```

## Run an image in interactive mode with the command /bin/bash and link the Ports
```sh
docker run -it --link <docker-container-name>:<docker-container-alias>
<image-name> /bin/bash
```

## Run an ENTRYPOINT command in interactive mode with command /bin/bash
```sh
docker run --entrypoint /bin/bash -i -t <image_name>
```

## Run an image in interactive mode with the command /bin/bash mounting the host directory /var/app/current to the container
directory /usr/src/app
```sh
docker run -it -v /var/app/current:/usr/src/app <image_name> /bin/bash
```

## Run an image in interactive mode with the command /bin/bash
setting the environments variables FOO and BAR
```sh
docker run -it -e FOO=foo -e BAR=bar <image_name> /bin/bash
```
