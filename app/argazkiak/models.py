from django.contrib.gis.db import models


class Argazki(models.Model):
    titulo = models.CharField(max_length=100)
    autor = models.CharField(max_length=50)
    ubicacion = models.PointField()
    orientacion = models.IntegerField()
    fecha = models.DateField()
    archivo = models.CharField(max_length=50)
