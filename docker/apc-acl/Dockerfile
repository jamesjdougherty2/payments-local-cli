FROM openjdk:11

WORKDIR /usr/app

ENTRYPOINT ["java", "-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005", "-Doracle.jdbc.timezoneAsRegion=false", "-jar", "web-1.0-boot.jar"]