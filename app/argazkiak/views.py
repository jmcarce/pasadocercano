from django.shortcuts import render


# Create your views here.
def mostrar_fotos(request):
    lista_fotos = [1, 2, 3]
    return render(request, "mostrar_fotos.html", {"fotos": lista_fotos})
