# Image officielle de Node.js
FROM node:14-alpine

# Définit le répertoire de travail dans le conteneur
WORKDIR /app

# Copie les fichiers de l'application dans le conteneur
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie le reste des fichiers de l'application
COPY . .

# Commande par défaut pour démarrer l'application
CMD ["npm", "start"]
