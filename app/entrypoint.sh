#!/bin/sh

if [ "$DATABASE" = "postgres" ]
then
    echo "Esperando a que arranque PostgreSQL..."

    while ! nc -z $SQL_HOST $SQL_PORT; do
        sleep 0.1
    done

    echo "PostgreSQL iniciado"
fi

#python3 manage.py flush --no-input
#python3 manage.py migrate

exec "$@"