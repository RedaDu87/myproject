# Utiliser une image de base Node.js
FROM node:18 AS build

# Définir le répertoire de travail
WORKDIR /crud-personnes

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Construire l'application Angular
RUN npm run build --prod 

# Utiliser une image de base Nginx pour servir l'application
FROM nginx:alpine

# Copier les fichiers construits par Angular depuis l'étape de construction
COPY --from=build /crud-personnes/dist/crud-personnes/browser /usr/share/nginx/html

# Exposer le port utilisé par Nginx
EXPOSE 80

# Commande par défaut pour Nginx
CMD ["nginx", "-g", "daemon off;"]

