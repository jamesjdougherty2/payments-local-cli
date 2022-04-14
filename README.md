# payments-local-cli

A collection of common commands used within the payments team.

## Start

1. **Clone** repository into workspace
1. **Run** `npm install && npm start`
1. **Get to Developing!**

## Upgrading version of postgres

Update docker-compose.yml file
cd docker
docker-compose stop db
docker-compose rm -v db
docker-compose up -d

