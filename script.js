var mymap = L.map('mapid').setView([51.505, -0.09], 2);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoiYWNhc3RmIiwiYSI6ImNrNWNvaXRxZTA2ZHczZm1zb3QwcDd6ZzAifQ.w8KA93Ox5I6w5fhkocdcfg'
}).addTo(mymap);

var layerGroup = L.layerGroup().addTo(mymap);
var markerArray = [];

mymap.on('click', function(e) {
    var poplocation = e.latlng; 
    var marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(mymap);
    marker.addTo(layerGroup);
    var coordinates = [marker.getLatLng().lat, marker.getLatLng().lng];
    markerArray.push(coordinates);
    drawLine(markerArray);
});

function drawLine(marray) {
    var polyline = L.polyline(marray, {color: 'red'}).addTo(mymap);
    polyline.addTo(layerGroup);
}

function testFunction1(){
    layerGroup.clearLayers();
    mymap.closePopup();
    marker = L.marker([40.743, -73.822]).addTo(layerGroup);
    marker.bindPopup("Spiderman").openPopup();
}

function testFunction2(){
    layerGroup.clearLayers();
    mymap.closePopup();
    marker = L.marker([39.760979, -84.192200]).addTo(layerGroup);
    marker.bindPopup("Hulk").openPopup();
}

function testFunction3(){
    layerGroup.clearLayers();
    mymap.closePopup();
    marker = L.marker([54.464180, -110.182259]).addTo(layerGroup);
    marker.bindPopup("Wolverine").openPopup();
}