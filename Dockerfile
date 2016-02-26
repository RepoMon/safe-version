FROM ubuntu:latest

MAINTAINER Tim Rodger

EXPOSE 80

# Install dependencies
RUN apt-get update -qq && \
    apt-get -y install \
    git \
    wget \
    tar

WORKDIR /tmp

RUN wget https://nodejs.org/download/release/latest/node-v5.7.0-linux-x64.tar.gz
RUN sudo tar -C /usr/local --strip-components 1 -xzf node-v5.7.0-linux-x64.tar.gz

# RUN sudo ln -s "$(which nodejs)" /usr/bin/node

CMD ["/home/app/run.sh"]

# Move files into place
COPY src/ /home/app/

RUN rm -rf /home/app/data/*

# git clone the database of FriendsOfPHP/security-advisories to /home/app/data/security-advisories
WORKDIR /home/app/data

RUN git clone https://github.com/FriendsOfPHP/security-advisories

WORKDIR /home/app

RUN npm install