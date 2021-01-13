#!/usr/bin/env bash

# Detener y borrar los contenedores existentes. -v para borrar los volumenes
# docker-compose -f docker-compose.prod.yml down -v
docker-compose -f docker-compose.prod.yml down

# Arrancar los contenedores construyendo antes las imagenes
docker-compose -f docker-compose.prod.yml up --build

# Crear las migraciones de la base de datos de produccion
docker-compose exec web python3 manage.py makemigrations

# Realizar las migraciones de los models a la base de datos de produccion
docker-compose exec web python3 manage.py migrate

# Recolectar los archivos estaticos para servirlos desde nginx
docker-compose exec web python3 manage.py collectstatic

# Crear superusuario (si hemos borrado la base de datos)
# docker-compose exec web python3 manage.py createsuperuser

