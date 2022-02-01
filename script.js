var map = L.map('mapid').setView([38.63868,-90.30317], 12);

  // load a tile layer
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function onEachFeature(feature, layer) {
  if (feature.properties && feature.properties.popupContent) {
    layer.bindPopup(feature.properties.popupContent);
  }
}

var geojsonFeature = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "Name": "Sauce on the Side",
        "popupContent": "<b>Sauce on the Side</b><br>Great calzones and salads"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.2565586566925,
          38.627172226771336
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Seoul  Taco",
        "popupContent": "<b>Seoul Taco</b><br>Korean-mexican fusion, I love the burritos"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.24987995624542,
          38.628341454584714
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "U-City Grill",
        "popupContent": "<b>U-City Grill</b><br>Cash only; delicicous beef bulgogi"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.30848622322081,
          38.65663598042729
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "801 Chophouse",
        "popupContent": "<b>801 Chophouse</b><br>Elegant steakhouse"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.33247590065001,
          38.64892763595949
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Charlie Gitto's",
        "popupContent": "<b>Charlie Gitto's</b><br>Best creme brulee in STL"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.27347803115843,
          38.61791831050015
        ]
      }
    }
  ]
};

L.geoJSON(geojsonFeature, {
  onEachFeature: onEachFeature
}).addTo(map);

//var feat = L.geoJSON(geojsonFeature).addTo(map);

//feat.bindPopup("help").openPopup();

var myLines = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -106.5234375,
            35.10193405724606
          ],
          [
            -106.41357421875,
            35.37113502280101
          ],
          [
            -106.0400390625,
            35.567980458012094
          ],
          [
            -105.79833984375,
            35.69299463209881
          ],
          [
            -105.6005859375,
            35.47856499535729
          ],
          [
            -105.40283203124999,
            35.460669951495305
          ],
          [
            -105.09521484375,
            35.69299463209881
          ],
          [
            -104.83154296875,
            35.94243575255426
          ],
          [
            -104.74365234375,
            36.049098959065645
          ],
          [
            -104.6337890625,
            36.2265501474709
          ],
          [
            -104.6337890625,
            36.421282443649496
          ]
        ]
      }
    }
  ]
}

var myStyle = {
    "color": "#ff7800",
    "weight": 2,
    "opacity": 0.65
};

L.geoJSON(myLines, {
    style: myStyle
}).addTo(map);



L.geoJSON(states, {
    style: function(feature) {
        switch (feature.properties.party) {
            case 'Republican': return {color: "#C8C9C7"};
            case 'Democrat':   return {color: "#003DA5"};
        }
    }
}).addTo(map);
