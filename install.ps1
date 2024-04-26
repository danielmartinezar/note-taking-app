
if (!(Test-Path "C:\Program Files\Docker\Docker\Docker Desktop.exe")) {
    Write-Host "Docker no está instalado. Por favor instala Docker e inténtalo de nuevo."
    exit 1
}


if (!(Test-Path "C:\Program Files\Docker\Docker\resources\bin\docker-compose.exe")) {
    Write-Host "Docker Compose no está instalado. Por favor instala Docker Compose e inténtalo de nuevo."
    exit 1
}


Write-Host "Ejecutando docker-compose up..."
. docker-compose up --build
