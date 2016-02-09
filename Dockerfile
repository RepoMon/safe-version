FROM ubuntu:latest

MAINTAINER Tim Rodger

EXPOSE 80

# Install dependencies
RUN apt-get update -qq && \
    apt-get -y install \
    nodejs \
    npm \
    git

RUN sudo ln -s "$(which nodejs)" /usr/bin/node

CMD ["/home/app/run.sh"]

# Move files into place
COPY src/ /home/app/

# git clone the database of FriendsOfPHP/security-advisories to /home/app/data/FriendsOfPHP/security-advisories
WORKDIR /home/app/data

RUN git clone https://github.com/FriendsOfPHP/security-advisories

WORKDIR /home/app

RUN npm install