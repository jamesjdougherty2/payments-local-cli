#!/bin/bash
printf "\n🚀  Hold on tight...\n"

if [ $1 = true ]
then
    cd ../

    printf "\n🏗️   Building apc-acl...\n"
    cd ../apc-acl
    ./gradlew clean bootJar

    printf "\n🏗️   Building authorization-api...\n"
    cd ../authorization-api
    ./gradlew clean bootJar

    printf "\n🏗️   Building pricing-gateway...\n"
    cd ../pricing-gateway
    ./gradlew clean bootJar

    printf "\n🏗️   Building kafka-consumer/kafka-producer...\n"
    cd ../kafka-acl
    ./gradlew clean bootJar

    printf "\n🏗️   Building price-management...\n"
    cd ../price-management
    ./gradlew clean bootJar 

    printf "\n🏗️   Building priceiq...\n"
    cd ../priceiq
    ./gradlew clean bootJar -x npmInstall -x buildUI

    cd ../kraken-cli/docker
fi

printf "\n🐳  Building containers...\n\n"
docker-compose build

printf "\n🐳  Starting containers...\n\n"
docker-compose up -d
