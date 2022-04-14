FROM openjdk:11

WORKDIR /usr/app

ENTRYPOINT ["java", "-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5010", "-jar", "web-1.1-boot.jar"]