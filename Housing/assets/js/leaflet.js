// street view for map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: LEAFLET
    });
// staellite view for map
    let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            accessToken: LEAFLET
        });


// Create a base layer that holds both maps.
let baseMaps = {
    "Streets": streets,
    "Satellite Streets": satelliteStreets
  };

//create map
  let map = L.map("mapid", {
    center: [34.0522, -118.2437],
    zoom: 8,
    layers: [streets]
  })

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);
// select id for table 
maptbody = d3.select("#mapoverview")

//calls input 
function Click(filter){
  maptbody.html("");
  //creates array for crime names
  var crimeNames = ["Felony Offenses", "Violent Offenses", "Property Offenses", "Drug Offenses", "Sex Offenses", "Other Offenses", "Misdemeanor", "Status Offenses"]
    //creates table with new year
    for (let i = 0; i < 8; i++){
      let row = maptbody.append("tr");
      let title = row.append("td");
      title.text(crimeNames[i])
      row.append("td").text(laMetro[filter][i])
      row.append("td").text(orange[filter][i])
      row.append("td").text(riverside[filter][i])
      row.append("td").text(SanBernadino[filter][i])
      row.append("td").text(ventura[filter][i])
      
    };

};