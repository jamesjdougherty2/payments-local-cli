#!/bin/bash
printf "\n🚀  Hold on tight...\n"

if [ $1 = true ]
then
    cd ../
fi

printf "\n🐳  Building containers...\n\n"
docker-compose build

printf "\n🐳  Starting containers...\n\n"
docker-compose up -d
