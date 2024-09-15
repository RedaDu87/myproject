#!/bin/bash

# Configuration des noms des images
BACKEND_IMAGE="my-spring-boot-app"
FRONTEND_IMAGE="my-angular-app"

# Construire l'image Docker pour le backend
echo "Construire l'image Docker pour le backend..."
cd backend
docker build -t $BACKEND_IMAGE .
cd ..

# Construire l'image Docker pour le frontend
echo "Construire l'image Docker pour le frontend..."
cd frontend
docker build -t $FRONTEND_IMAGE .
cd ..

# Créer un fichier docker-compose.yml si non existant
echo "Créer docker-compose.yml..."
cat <<EOF > docker-compose.yml
version: '3.8'

services:
  db:
    image: mariadb:10.6
    container_name: db
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: ma_base_de_donnees
      MYSQL_USER: delta
      MYSQL_PASSWORD: delta
    ports:
      - "3307:3306"
    networks:
      - mynetwork
      
  backend:
    image: $BACKEND_IMAGE
    container_name: backend
    depends_on:
      - db
    environment:
      SPRING_DATASOURCE_URL: jdbc:mariadb://db:3306/ma_base_de_donnees
      SPRING_DATASOURCE_USERNAME: delta
      SPRING_DATASOURCE_PASSWORD: delta
    ports:
      - "8080:8080"  
    networks:
      - mynetwork

  frontend:
    image: $FRONTEND_IMAGE
    container_name: frontend
    depends_on:
      - backend
    ports:
      - "80:80"
    networks:
      - mynetwork

 

networks:
  mynetwork:
    driver: bridge
EOF

# Démarrer les conteneurs avec Docker Compose
echo "Démarrer les conteneurs avec Docker Compose..."
docker-compose up --build
