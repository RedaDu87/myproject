# Utiliser une image Node.js pour la phase de build
FROM node:alpine AS build

# Créer et définir le répertoire de travail pour l'application
WORKDIR /usr/src/app

# Copier les fichiers de l'application dans le répertoire de travail
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code source
COPY . .

# Installer Angular CLI
RUN npm install -g @angular/cli

# Construire l'application en mode production
RUN ng build 

# Étape 2 : Utiliser une image NGINX pour servir l'application
FROM nginx:alpine

# Copier les fichiers construits depuis l'étape de build
COPY --from=build /usr/src/app/dist/coranconsumer /usr/share/nginx/html

# Exposer le port 80 pour accéder à l'application
EXPOSE 80

# Démarrer NGINX
CMD ["nginx", "-g", "daemon off;"]
