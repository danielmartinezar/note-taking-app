# Especifica la imagen base de Node.js con la versión que estás utilizando
FROM node:21.6.2

# Instalar dockerize
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias de Node.js (incluyendo las devDependencies para compilar TypeScript)
RUN npm install

# Copia el resto de los archivos de tu proyecto al directorio de trabajo
COPY . .

# Define las variables de entorno
ENV DATABASE_URL="mysql://user:password@db:3306/NOTE_APP"
ENV PORT=8080

# Prepara un script de inicio que usa dockerize para esperar a la base de datos
RUN echo '#!/bin/sh\n\
    dockerize -wait tcp://db:3306 -timeout 60s\n\
    npx prisma migrate deploy\n\
    npm start\n' > start.sh \
    && chmod +x start.sh

# Expone el puerto que tu aplicación utilizará
EXPOSE 8080

# Usa el script de inicio para ejecutar tu aplicación
CMD ["./start.sh"]
