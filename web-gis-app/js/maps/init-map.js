
var views = [];
var indonesiaView = [-1.077,117.993];
var jakartaView = [-6.178520, 106.827207];

views.push(indonesiaView, jakartaView);

var mymap = L.map('mapid').setView(views[1], 10);
var osm = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var mapbox = 'https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGlyYTI4IiwiYSI6ImNpcmM0bWhhZTAwNnNpa25ub3hkbWI2bnAifQ.m6nEUKku6DmUSTljCgNJ4g';

var sources = [osm,mapbox];

L.tileLayer(sources[1]).addTo(mymap);

// creating marker on the map
var cities = [
  {
    name: 'Jakarta',
    population: 9680000,
    coordinates: [-6.178520, 106.827207]
  },
  {
    name: 'Depok',
    population: 1752000,
    coordinates: [-6.367967, 106.829559]
  }
]

for (var i = 0; i<cities.length; ++i) {
  var marker = L.marker(cities[i].coordinates, {draggable:false}).addTo(mymap);
  marker.bindPopup('Welcome to ' + cities[i].name + '<br>' + 'Population: ' + cities[i].population);
}

// creating clickable popup
var popup = L.popup();
function onMapClick(e){
  popup
  .setLatLng(e.latlng)
  .setContent('Coordinates: <br>' + e.latlng.toString())
  .openOn(mymap);
}

mymap.on('click', onMapClick);
