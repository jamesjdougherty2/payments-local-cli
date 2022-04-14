#!/bin/bash

printf "\n🚀  Hold on tight...\n"

cd ../../$1

printf "\n🏗️   Building $1...\n"

if [ $1 = "nafb" ]
then
  ./gradlew clean bootJar -x npmInstall -x npmCi -x buildUi
else
  ./gradlew clean bootJar
fi

cd ../kraken-cli/docker

printf "\n🐳  Recreating container...\n\n"

docker-compose up --force-recreate -d $1