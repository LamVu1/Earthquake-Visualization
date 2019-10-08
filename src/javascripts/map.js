




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
    mapTypeId: 'terrain'

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
    let d = new Date(data.features[i].properties.time);

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

    // var image = {
    //   url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //   // This marker is 20 pixels wide by 32 pixels high.
    //   size: new google.maps.Size(20, 32),
    //   // The origin for this image is (0, 0).
    //   origin: new google.maps.Point(0, 0),
    //   // The anchor for this image is the base of the flagpole at (0, 32).
    //   anchor: new google.maps.Point(0, 32),
    //   opcaity:0
    // };
  //  let p=google.maps.SymbolPath.CIRCLE

    let marker = new google.maps.Marker({
      position: latLng,
      map: map,
      // icon:{url:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==",
      // size: new google.maps.Size(100, 100)}
      }
      )
      marker.setOptions({'opacity': 0})

   let infowindow = new google.maps.InfoWindow({
      content: 'Location: '+content +"\n"+' Magnitude: '+mag+"\n"+ 'Date: '+d
    });

    // marker.addListener('click', function() {
    //   infowindow.open(map, marker);
    
    // });
    
    // closeInfoWindow = function() {
    //   infowindow.close();
    // };
    marker.open=false;

    google.maps.event.addListener(marker, 'click', function() {
      if(!marker.open){
          infowindow.open(map,marker);
          marker.open = true;
      }
      else{
          infowindow.close();
          marker.open = false;
      }
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