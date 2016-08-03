
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

var jakartaPoint = [-6.178520, 106.827207];
var depokPoint = [-6.367967, 106.829559];
var markerPoints = [];
markerPoints.push(jakartaPoint, depokPoint);

var cities = ['Jakarta', 'Depok'];

var citiesStats = [
  {
    name:'Jakarta',
    population: 9680000
  },
  {
    name: 'Depok',
    population: 1752000
  }
];

for (var i = 0; i<markerPoints.length; ++i) {
  var marker = L.marker(markerPoints[i], {draggable:false}).addTo(mymap);
  marker.bindPopup('Welcome to ' + citiesStats[i].name + '<br>' + 'Population: ' + citiesStats[i].population);
}
