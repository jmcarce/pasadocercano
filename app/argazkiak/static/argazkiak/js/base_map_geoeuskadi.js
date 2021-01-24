var lat_centro=42.846667
var lon_centro=-2.673056
var zoom_ini=18;

var basemap = L.map('map_div').setView([lat_centro, lon_centro], zoom_ini);

var wmsLayer = L.tileLayer.wms('https://www.geo.euskadi.eus/WMS_KARTOGRAFIA?', {
    layers: 'EDI_FONDO_URBANO,EDI_GENERICAS,CAL_CALLES',
    maxZoom: 20,
    minZoom: 13,
    attribution: 'Map data &copy; <a href="https://geo.euskadi.eus/">Eusko Jaurlaritza / Gobierno Vasco. geoEuskadi</a>'
    }).addTo(basemap);

basemap.setMaxBounds(basemap.getBounds());
var marca_centro = L.marker([lat_centro, lon_centro], {title: "centro del mapa", opacity: 0.5}).addTo(basemap);
actualiza_centro();