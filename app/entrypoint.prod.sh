#!/bin/sh

if [ "$DATABASE" = "postgres" ];
then
    echo "Esperando a que Postgres se haya iniciado ... "
    while ! nc -z $SQL_HOST $SQL_PORT; do
        sleep 0.1
    done

    echo "Postgres se ha iniciado."
fi

exec "$@"