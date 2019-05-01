# This Docker file can be used to produce an image that
# can then be used for development on Windows platform.
# It will install Yarn.

# Build a new image...
# docker build -t riojack/lettuce-asm:dev .

# Run image with the current directory mounted as /workspace
# in the container...
# docker run -v path/to/lettuce-asm:/workspace -it riojack/lettuce-asm:dev /bin/bash


FROM node

RUN apt-get -y update
RUN apt-get -y install apt-transport-https
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get -y update
RUN apt-get -y install yarn

WORKDIR /workspace
