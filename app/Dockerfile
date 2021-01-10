FROM python:3.9-slim-buster

WORKDIR /usr/src/app

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Instalar bibliotecas geoespaciales y dependencias para psycopg2
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        binutils libproj-dev gdal-bin \
        netcat gcc python3-dev libpq-dev\
    && rm -rf /var/lib/apt/lists/* 

# Actualizar pip e instalar requirements.txt
RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt

COPY ./entrypoint.sh .

# Copiar los archivos del proyecto
COPY . .

ENTRYPOINT [ "/usr/src/app/entrypoint.sh" ]