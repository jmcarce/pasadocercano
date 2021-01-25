// Funcion que asigna a cada feature un popup en la capa con el enlace a la fotografia
function paraCada(feature, layer){
    if (feature.properties && feature.properties.Archivo) {
        target = "pictures/"+ feature.properties.Archivo ;
        let titulo = "Sin titulo";
        if(feature.properties.Titulo){titulo = feature.properties.Titulo}
        layer.bindPopup('<a href="'+target+'">'+titulo+'</a>');
    }
}

// obtener json con las ubicaciones:
function buscar_ubicaciones() {
    const requestURL = 'http://'+ document.location.hostname +":"+ document.location.port + '/bilatu/';
    const request = new XMLHttpRequest();
    request.open('GET', requestURL);
    //request.responseType = 'json';
    request.send();
    request.onload = function(){
        let ubicaciones_encontradas = JSON.parse(request.responseText);
        crear_capa(ubicaciones_encontradas);
    }
}

// asignamos a cada feature en 'ubicaciones' su fotografia y un popup
function crear_capa(ubicaciones) {
    L.geoJSON(
        ubicaciones,
        { onEachFeature: paraCada }
        ).addTo(basemap);
}

function get_centro(map){
    return map.getCenter();
};
    
function actualiza_centro(){
    let coordenadas = get_centro(basemap);
    let str_coordenadas = "Longitud: "+coordenadas.lng + " - Latitud: " + coordenadas.lat;
    marca_centro.remove();
    marca_centro = L.marker([coordenadas.lat, coordenadas.lng], {title: "centro del mapa", opacity: 0.5}).addTo(basemap);
    document.getElementById("centro_coord").innerHTML = "Coordenadas del centro: \n"+ str_coordenadas;
    buscar_ubicaciones();
};