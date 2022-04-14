FROM openjdk:11

WORKDIR /usr/app

ENTRYPOINT ["java", "-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5006", "-jar", "web-1.1.jar"]