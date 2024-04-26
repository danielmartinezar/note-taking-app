# Especifica la imagen base de Node.js
FROM node:21.6.2

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código fuente del proyecto al contenedor
COPY . .

# Expone el puerto 3000
EXPOSE 3000

# Define la variable de entorno para la API
ENV REACT_APP_API_BASE_URL=http://localhost:8080/api/v1

# Inicia la aplicación React
CMD ["npm", "start"]
