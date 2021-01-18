// Funcion que asigna a cada feature un popup en la capa con el enlace a la fotografia
function paraCada(feature, layer){
    if (feature.properties && feature.properties.Archivo) {
        target = "pictures/"+ feature.properties.Archivo ;
        let titulo = "Sin titulo";
        if(feature.properties.Titulo){titulo = feature.properties.Titulo}
        layer.bindPopup('<a href="'+target+'">'+titulo+'</a>');
    }
}

// asignamos a cada feature en 'ubicaciones' su fotografia y un popup
L.geoJSON(
    ubicaciones,
    {
        onEachFeature: paraCada
    }
    ).addTo(basemap);