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
    marker = L.marker([35.6894989, 139.6917114]).addTo(layerGroup);
    marker.bindPopup("Tokio: 39,4 millones").openPopup();
}

function testFunction2(){
    layerGroup.clearLayers();
    mymap.closePopup();
    marker = L.marker([23.1166706, 113.25]).addTo(layerGroup);
    marker.bindPopup("Cantón: 32,6 millones").openPopup();
}

function testFunction3(){
    layerGroup.clearLayers();
    mymap.closePopup();
    marker = L.marker([31.2222195, 121.4580612]).addTo(layerGroup);
    marker.bindPopup("Shanghái: 29,6 millones").openPopup();
}

function testFunction4(){
    layerGroup.clearLayers();
    mymap.closePopup();
    marker = L.marker([-6.2146201, 106.8451309]).addTo(layerGroup);
    marker.bindPopup("Yakarta: 27 millones").openPopup();
}

function testFunction5(){
    layerGroup.clearLayers();
    mymap.closePopup();
    marker = L.marker([28.6519508, 77.2314911]).addTo(layerGroup);
    marker.bindPopup("Delhi: 25,3 millones").openPopup();
}

function testFunction6(){
    layerGroup.clearLayers();
    mymap.closePopup();
    marker = L.marker([37.5660019, 126.9784012]).addTo(layerGroup);
    marker.bindPopup("Seúl: 24,2 millones").openPopup();
}

function testFunction7(){
    layerGroup.clearLayers();
    mymap.closePopup();
    marker = L.marker([30.3753204, 69.3451157]).addTo(layerGroup);
    marker.bindPopup("Karachi: 23,2 millones").openPopup();
}

function testFunction8(){
    layerGroup.clearLayers();
    mymap.closePopup();
    marker = L.marker([19.0728302, 72.8826065]).addTo(layerGroup);
    marker.bindPopup("Bombay: 22,6 millones").openPopup();
}

function testFunction9(){
    layerGroup.clearLayers();
    mymap.closePopup();
    marker = L.marker([14.6042004, 120.9822006]).addTo(layerGroup);
    marker.bindPopup("Manila: 22,5 millones").openPopup();
}

function testFunction10(){
    layerGroup.clearLayers();
    mymap.closePopup();
    marker = L.marker([19.4284706, -99.1276627]).addTo(layerGroup);
    marker.bindPopup("Ciudad de México: 22,2 millones").openPopup();
}