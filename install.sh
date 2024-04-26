
if ! command -v docker &> /dev/null; then
    echo "Docker no está instalado. Por favor instala Docker e inténtalo de nuevo."
    exit 1
fi


if ! command -v docker-compose &> /dev/null; then
    echo "Docker Compose no está instalado. Por favor instala Docker Compose e inténtalo de nuevo."
    exit 1
fi


echo "Ejecutando docker-compose up & build..."
docker-compose up --build
