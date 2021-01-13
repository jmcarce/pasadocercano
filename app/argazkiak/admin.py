from django.contrib import admin
from django.contrib.gis.admin import OSMGeoAdmin
from .models import Argazki


@admin.register(Argazki)
class ArgazkiAdmin(OSMGeoAdmin):
    list_display = ('titulo', 'autor', 'ubicacion', 'orientacion', 'fecha', 'archivo')
