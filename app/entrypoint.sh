#!/bin/sh

if [ "$DATABASE" = "postgres" ];
then
    echo "Esperando a que arranque PostgreSQL..."

    while ! nc -z $SQL_HOST $SQL_PORT; do
        sleep 0.1
    done

    echo "PostgreSQL iniciado"
fi
# echo "**** 1.- Flush ****"
# python3 manage.py flush --no-input
echo "**** 2.- Make Migrations ****"
python3 manage.py makemigrations
echo "**** 3.- Migrate ****"
python3 manage.py migrate

exec "$@"