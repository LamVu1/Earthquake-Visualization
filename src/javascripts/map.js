import {style} from './mapstyle'
import { O_DIRECT } from 'constants';


export const initMap=function(data) {
  
  const map = new google.maps.Map(document.getElementById('map'),
    {
      center: { lat: 36.778, lng: -119.417 },
      zoom: 7,
      styles: style,
      gestureHandling: 'greedy',
      mapTypeId: 'terrain'
    }
  );

  var allowedBounds = new google.maps.LatLngBounds
    (
    new google.maps.LatLng(32.399,-124), 
    new google.maps.LatLng(42.294, -114)
    );
  
  var lastValidCenter = map.getCenter();

  google.maps.event.addListener(map, 'center_changed', function()
    {
      if(allowedBounds.contains(map.getCenter())) 
      {
       lastValidCenter = map.getCenter();
       return; 
      }
   map.panTo(lastValidCenter);
    });

  let markers=[];
  let heatmapData=[];
  let circles=[];

  for(let i=0; i<data.features.length;i++){
    let coords = data.features[i].geometry.coordinates;
    let latLng = new google.maps.LatLng(coords[1],coords[0]);
    let content = data.features[i].properties.place
    let mag=data.features[i].properties.mag

      heatmapData.push({location:latLng, weight: mag});
      

    const low = [118,100,44]   // [90, 100, 69]; 
    const high = [5, 100, 49]; 
    const minMag = 2;
    const maxMag = 6.0;
    const frac = mag/(maxMag-minMag)

    let d = new Date(data.features[i].properties.time);     
     
    function HSL(low,high,frac)
    {
      let colors=[];
      for(let i=0; i<3;i++)
      {
        colors[i]=(high[i]-low[i])*frac+low[i];
      }
      return 'hsl(' + colors[0] + ',' + colors[1] + '%,' + colors[2] + '%)';
    }

    const color = HSL(low,high, frac);

    let circle=new google.maps.Circle(
      {
        strokeColor: '#ffffff',
        strokeOpacity: .8,
        strokeWeight: 1,
        fillColor: color,
        fillOpacity: (1-mag/10),
        map: map,
        center: latLng,
        radius: mag*10000
      })

    circles.push(circle)
    let marker = new google.maps.Marker(
      {
        position: latLng,
        map: map,
      })
  
    markers.push(marker)
     
    let infowindow = new google.maps.InfoWindow(
      {
      content: "<p>"+'Location: '+content +"<br />"+'Date: '+d+"<br />"+ ' Magnitude: '+mag+ "<p>"
      });

    marker.open=false;

    google.maps.event.addListener(marker, 'click', function()
      {
        if(!marker.open)
        {
          infowindow.open(map,marker);
          marker.open = true;
        }else
        {
        infowindow.close();
        marker.open = false;
        }
      }); 

  }

  function setMapOnCircle(map)
    {
      for (var i = 0; i < circles.length; i++) 
        {
          circles[i].setMap(map);
        }
    }

  document.getElementById('ToggleCircle').addEventListener('click',()=>
    {
      let id= document.getElementById('ToggleCircle')
      if(id.className==="selected"){
        setMapOnCircle(null);
        id.classList.remove('selected');
        id.classList.add('unselected')
      }
      else if(id.className==="unselected"){
        setMapOnCircle(map);
        id.classList.remove("unselected");
        id.classList.add("selected");
      }
    })

  function setMapOnMarker(map)
    {
      for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
      }
    }

  document.getElementById('ToggleMarkers').addEventListener('click',()=>
    {
      let id=document.getElementById('ToggleMarkers')
      if(id.className==="selected"){
        setMapOnMarker(null);
        id.classList.remove('selected');
        id.classList.add('unselected');
      }
      else if(id.className==="unselected"){
        setMapOnMarker(map);
        id.classList.remove("unselected");
        id.classList.add("selected")
      }
    })

  var markerCluster = new MarkerClusterer( map, markers,
    {imagePath: './src/assets/m', maxZoom: 7}
  );

    // function setMapOnCluster(themap)
    // {
    //  markerCluster.set(map,themap)
    // }

    MarkerClusterer.prototype.hide = function() {
    this.setMap(null);
    this.resetViewport();
  };
  
  MarkerClusterer.prototype.show = function() {
    this.setMap(map); // replace map with your reference to the map object
    this.redraw();
  };
  

  document.getElementById('ToggleCluster').addEventListener('click',()=>
    {
      let id=document.getElementById('ToggleCluster');
      if(id.className==="selected"){
        markerCluster.hide()
        id.classList.remove('selected');
          id.classList.add('unselected');
      }
      else if(id.className==="unselected"){
        markerCluster.show()
        id.classList.remove("unselected");
        id.classList.add("selected");
      }
    })


  var heatmap = new google.maps.visualization.HeatmapLayer(
    {
      data: heatmapData,
      // dissipating: false,
      radius: 50,
    })
  
  document.getElementById('ToggleHeatMap').addEventListener('click',()=>
    {
      let id=document.getElementById('ToggleHeatMap')
      if(id.className==="unselected")
        {
          heatmap.setMap(map)
          id.classList.remove("unselected");
          id.classList.add("selected");
        }
      else if(id.className==="selected")
        {
          heatmap.setMap(null)
          id.classList.remove('selected');
          id.classList.add('unselected');
        }
    })

  
 
}
































// // const heatmapData=[];
      
//       // heatmapData.push({location: latLng, weight:Math.pow(2,mag)});
//       // var marker = new google.maps.Marker({
//       //   position: latLng,
//       //   map: map,
//       // icon: icon});
//     // var heatmap = new google.maps.visualization.HeatmapLayer({
//     //   data: heatmapData,
//     //   dissipating: false,
//     //   map: map
//     // })


// export const initMap=function() {
  
//   var svg = d3.select("svg");

// var path = d3.geoPath();

// d3.json("https://d3js.org/us-10m.v1.json", function(error, us) {
//   if (error) throw error;

//   svg.append("g")
//       .attr("class", "states")
//     .selectAll("path")
//     .data(topojson.feature(us, us.objects.states).features)
//     .enter().append("path")
//       .attr("d", path);

//   svg.append("path")
//       // .attr("class", "state-borders")
//       .attr("d", path(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; })));
// })