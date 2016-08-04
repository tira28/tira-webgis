

var views = [];
var indonesiaView = [-1.077,117.993];
var jakartaView = [-6.178520, 106.827207];

views.push(indonesiaView, jakartaView);

var osm = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var mapbox = 'https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGlyYTI4IiwiYSI6ImNpcmM0bWhhZTAwNnNpa25ub3hkbWI2bnAifQ.m6nEUKku6DmUSTljCgNJ4g';

var sources = [osm,mapbox];

// var osmLayer = L.tileLayer(sources[0]);
// var mapboxLayer = L.tileLayer(sources[1]).addTo(map);

/**
var map = L.map('mapid',{
  center: views[1],
  zoom:10,
  zoomControl: true,
  layers: [mapboxLayer]
});
**/

var map = L.map('mapid').setView([-6.178520, 106.827207], 10);
var mapboxLayer = L.tileLayer(sources[1]).addTo(map);

/**
var layerOptions = {
  position: 'bottomright',
  collapsed: true
};

var baseMaps = {
  "OSM":osmLayer,
  "MapBox": mapboxLayer
};

var scaleOptions = {
  position:'bottomleft',
  metric:true
};

**/


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

// var markers = []

/**
for (var i = 0; i<cities.length; ++i) {
  var marker = L.marker(cities[i].coordinates).addTo(map)
              .bindPopup('Welcome to ' + cities[i].name + '<br>' + 'Population: ' + cities[i].population);
}
**/


/**
L.control.layers(baseMaps,{"Jakarta": jakarta.bindPopup('Hallo') },layerOptions).addTo(map);
L.control.scale(scaleOptions).addTo(map);
**/

var kacrut = L.marker([-6.208650322630214, 106.74882888793945]).addTo(map)
              .bindPopup('TEST');



// 'Welcome to ' + cities[i].name + '<br>' + 'Population: ' + cities[i].population


/**
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
