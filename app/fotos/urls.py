from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

# from upload.views import image_upload
from argazkiak.views import mostrar_fotos
from argazkiak.views import bilatu

urlpatterns = [
    # path("", image_upload, name="upload"),
    path("", mostrar_fotos, name="mostrar"),
    path('admin/', admin.site.urls),
    path('bilatu/', bilatu, name='bilatu'),
]

if bool(settings.DEBUG):
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
