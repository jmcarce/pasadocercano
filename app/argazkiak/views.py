from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.
def mostrar_fotos(request):
    lista_fotos = [1, 2, 3]
    return render(request, "mostrar_fotos.html", {"fotos": lista_fotos})

def bilatu(request):
    data = {
    "type": "FeatureCollection",
    "name": "ubicaciones",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
        { "type": "Feature", "properties": { "id": 1, "Titulo": "Mercado en la plaza de la Virgen Blanca", "Autor": "Salvador Ramón de Azpiazu Imbert", "Archivo": "AF0000167_1.jpg", "Origen": "Archivo Municipal de Vitoria-Gasteiz" }, "geometry": { "type": "Point", "coordinates": [ -2.673539771592466, 42.846160942006861 ] } },
        { "type": "Feature", "properties": { "id": 2, "Titulo": "Hornacina de la Virgen Blanca en San Miguel", "Autor": "Salvador Ramón de Azpiazu Imbert", "Archivo": "AF0000166_1.jpg", "Origen": "Archivo Municipal de Vitoria-Gasteiz" }, "geometry": { "type": "Point", "coordinates": [ -2.672830559886806, 42.84714085302717 ] } }
        ]
    }

    return JsonResponse(data)
