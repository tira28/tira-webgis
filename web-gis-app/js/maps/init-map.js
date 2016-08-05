

var views = [];
var indonesiaView = [-1.077,117.993];
var jakartaView = [-6.178520, 106.827207];

views.push(indonesiaView, jakartaView);


var osm = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var mapbox = 'https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGlyYTI4IiwiYSI6ImNpcmM0bWhhZTAwNnNpa25ub3hkbWI2bnAifQ.m6nEUKku6DmUSTljCgNJ4g';

var sources = [osm,mapbox];

var osmLayer = L.tileLayer(sources[0]);
var mapboxLayer = L.tileLayer(sources[1]);

var map = L.map('mapid',{
  center: jakartaView,
  zoom: 10,
  layers: [mapboxLayer]
});

// creating marker on the map
var cities = [
  {
    name: 'Jakarta',
    population: 9680000,
    coordinates: [-6.175360, 106.827176]
  },
  {
    name: 'Depok',
    population: 1752000,
    coordinates: [-6.367967, 106.829559]
  }
];

var markers = [];
// var popupMessage = 'Welcome to ' + cities[i].name + '<br>' + 'Population: ' + cities[i].population;

for (var i = 0; i<cities.length; ++i){
  var marker = L.marker(cities[i].coordinates).bindPopup('Welcome to ' + cities[i].name + '<br>' + 'Population: ' + cities[i].population);
  markers.push(marker);
}

var cityIcons = L.layerGroup(markers);

var geojsonFeature = {
  "type": "Feature",
  "properties": {
    "name": "Bekasi",
    "population": 2663011
  },
  "geometry": {
    "type": "Point",
    "coordinates": [106.99516, -6.24118]
  }
};

var geojsonLayer = L.geoJson(geojsonFeature).bindPopup('Welcome to ' + geojsonFeature.properties.name + '<br>' + 'Population: ' + geojsonFeature.properties.population);

var baseMaps = {
  "OSM" : osmLayer,
  "MapBox": mapboxLayer
};

var overlayMaps = {
  "Cities": cityIcons,
  "Geojson": geojsonLayer
}

var mapLayer  = L.control.layers(baseMaps, overlayMaps);
var mapScale = L.control.scale({
  metric: true
});




let mapComponent = [mapLayer, mapScale, geojsonLayer];

for (let component of mapComponent) {
  component.addTo(map);
}


// creating clickable popup
var popup = L.popup();
function onMapClick(e){
  popup
  .setLatLng(e.latlng)
  .setContent('Coordinates: <br>' + e.latlng.toString())
  .openOn(map);
}

map.on('click', onMapClick);
