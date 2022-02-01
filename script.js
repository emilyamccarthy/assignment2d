var map = L.map('map').setView([37.7, -122.4], 11);

var Stamen_Terrain = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

  $.getJSON("https://raw.githubusercontent.com/emilyamccarthy/assignment2c/main/sf_crime.geojson",function(data){
    var ratIcon = L.icon({
      iconUrl: 'https://icon-library.com/images/criminal-icon/criminal-icon-9.jpg',
      iconSize: [30,30]
    });
    var rodents = L.geoJson(data,{
      pointToLayer: function(feature,latlng){
        var marker = L.marker(latlng,{icon: ratIcon});
        marker.bindPopup(feature.properties.Location + '<br/>' + feature.properties.OPEN_DT);
        return marker;
      }
    });
    var clusters = L.markerClusterGroup();
    clusters.addLayer(rodents);
    map.addLayer(clusters);
  }).addTo(map);
