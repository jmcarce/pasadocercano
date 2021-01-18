var lat_centro=42.846667
var lon_centro=-2.673056
var zoom_ini=18;

var basemap = L.map('map_div').setView([lat_centro, lon_centro], zoom_ini);
var marca_centro = L.marker([lat_centro, lon_centro], {title: "centro del mapa", opacity: 0.5}).addTo(basemap);

var wmsLayer = L.tileLayer.wms('https://www.geo.euskadi.eus/WMS_KARTOGRAFIA?', {
    layers: 'EDI_FONDO_URBANO,EDI_GENERICAS,CAL_CALLES',
    maxZoom: 20,
    minZoom: 14,
    attribution: 'Map data &copy; <a href="https://geo.euskadi.eus/">Eusko Jaurlaritza / Gobierno Vasco. geoEuskadi</a>'
    }).addTo(basemap);

function get_centro(map){
    return map.getCenter();
};

function actualiza_centro(){
    let coordenadas = get_centro(basemap);
    let str_coordenadas = "Longitud: "+coordenadas.lng + " - Latitud: " + coordenadas.lat;
    marca_centro.remove();
    marca_centro = L.marker([coordenadas.lat, coordenadas.lng], {title: "centro del mapa", opacity: 0.5}).addTo(basemap);
    document.getElementById("centro_coord").innerHTML = "Coordenadas del centro: \n"+ str_coordenadas;
    
}