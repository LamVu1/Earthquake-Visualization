




export const initMap=function(data) {

  const style = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#181818"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1b1b1b"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#2c2c2c"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8a8a8a"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#373737"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#3c3c3c"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#4e4e4e"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#3d3d3d"
        }
      ]
    }
  ]
  
    const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 36.778, lng:  -119.417},
    zoom: 7,
    styles: style,
    mapTypeId: 'terrain',
    icon: {
      fillColor: '#fcfcfc',
      fillOpacity: 0,
      strokeColor: '',
      strokeWeight: 0
    }

  });
 
  
  for(let i=0; i<data.features.length;i++){
    let coords = data.features[i].geometry.coordinates;
    var latLng = new google.maps.LatLng(coords[1],coords[0]);
    let content = data.features[i].properties.place
    let mag=data.features[i].properties.mag
    const low = [90, 100, 69]; 
    const high = [5, 69, 54]; 
    const minMag = 2;
    const maxMag = 6.0;
    const frac = mag/(maxMag-minMag)
    function HSL(low,high,frac){
      let colors=[];
      for(let i=0; i<3;i++){
        colors[i]=(high[i]-low[i])*frac+low[i];
      }
      return 'hsl(' + colors[0] + ',' + colors[1] + '%,' + colors[2] + '%)';
    }
    const color = HSL(low,high, frac);

    let circle=new google.maps.Circle({
      strokeColor: '#ffffff',
        strokeOpacity: .3,
        strokeWeight: 1,
        fillColor: color,
        fillOpacity: 1,
        map: map,
        center: latLng,
        radius: Math.pow(10,mag)
    })
    let marker = new google.maps.Marker({
      position: latLng,
      map: map
    });

    let infowindow = new google.maps.InfoWindow({
      content: 'Location: '+content +'\n' +' Magnitude: '+mag
    });

    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  }
}

      












// const heatmapData=[];
      
      // heatmapData.push({location: latLng, weight:Math.pow(2,mag)});
      // var marker = new google.maps.Marker({
      //   position: latLng,
      //   map: map,
      // icon: icon});
    // var heatmap = new google.maps.visualization.HeatmapLayer({
    //   data: heatmapData,
    //   dissipating: false,
    //   map: map
    // })