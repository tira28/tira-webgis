

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
  center: views[1],
  zoom:12,
  zoomControl: true
});

var baseMaps = {
  "OSM":osmLayer,
  "MapBox": mapboxLayer
};

L.control.layers(baseMaps).addTo(map);


/**
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
]


for (var i = 0; i<cities.length; ++i) {
  var marker = L.marker(cities[i].coordinates, {draggable:false}).addTo(map);
  marker.bindPopup('Welcome to ' + cities[i].name + '<br>' + 'Population: ' + cities[i].population);
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

**/
