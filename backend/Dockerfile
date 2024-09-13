# Utiliser une image de base Java
FROM openjdk:17-jdk-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier le JAR compilé dans le conteneur
COPY target/crudback-0.0.1-SNAPSHOT.jar app.jar

# Exposer le port que Spring Boot utilise
EXPOSE 8080

# Commande pour exécuter l'application Spring Boot
ENTRYPOINT ["java", "-jar", "app.jar"]
