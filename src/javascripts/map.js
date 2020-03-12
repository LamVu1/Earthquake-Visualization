import {style} from './mapstyle'
// import { O_DIRECT } from 'constants';
import {Chart} from 'chart.js';

export const initMap=function(data) {
  
  const map = new google.maps.Map(document.getElementById('map'),
    {
      center: { lat: 36.778, lng: -119.417 },
      zoom: 7,
      styles: style,
      gestureHandling: 'greedy'
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
  let dates=[];
  let mags=[];
  let bymonths=[];

  for(let i=0; i<data.features.length;i++){
    let coords = data.features[i].geometry.coordinates;
    let latLng = new google.maps.LatLng(coords[1],coords[0]);
    let content = data.features[i].properties.place
    let mag=data.features[i].properties.mag
      mags.push(mag)
      heatmapData.push({location:latLng, weight: mag});
      

    const low = [118,100,44]   // [90, 100, 69]; 
    const high = [5, 100, 49]; 
    const minMag = 2;
    const maxMag = 6.0;
    const frac = mag/(maxMag-minMag)

    let d = new Date(data.features[i].properties.time);     
     dates.push(d)
     let bymonth = new Date(data.features[i].properties.time).getMonth()+1;
     if(bymonth<10){
      bymonth='0'+bymonth
     }
     let byyear =new Date(data.features[i].properties.time).getFullYear()+1;
     bymonths.push(bymonth+'-'+byyear)
     
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
  
    let ToggleCircle= document.getElementById('ToggleCircle')
    if(ToggleCircle.className==="selected"){
      setMapOnCircle(map);
    }
    else if(ToggleCircle.className==="unselected"){
      setMapOnCircle(null);
    }
  
    document.getElementById('ToggleCircle').onclick = ()=>
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
    }

    function setMapOnMarker(map)
    {
      for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
      }
    }
  
    let ToggleMarkers=document.getElementById('ToggleMarkers')
    if(ToggleMarkers.className==="selected"){
      setMapOnMarker(map);
    }
    else if(ToggleMarkers.className==="unselected"){
      setMapOnMarker(null);
    }

    document.getElementById('ToggleMarkers').onclick = () =>
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
    }

    

  var markerCluster = new MarkerClusterer( map, markers,
    {imagePath: './src/assets/m', maxZoom: 7})
  
    MarkerClusterer.prototype.hide = function() {
    this.setMap(null);
    this.resetViewport();
    };
  
    MarkerClusterer.prototype.show = function() {
    this.setMap(map);
    this.redraw();
  };


  let ToggleCluster=document.getElementById('ToggleCluster');
  if(ToggleCluster.className==="selected"){
    markerCluster.show()
  }
  else if(ToggleCluster.className==="unselected"){
    markerCluster.hide()
  }
  

  document.getElementById('ToggleCluster').onclick = ()=>
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
    }



  var heatmap = new google.maps.visualization.HeatmapLayer(
    {
      data: heatmapData,
      radius: 50,
    })


    let ToggleHeatMap=document.getElementById('ToggleHeatMap')
    if(ToggleHeatMap.className==="unselected")
        {
          heatmap.setMap(null)
        }
      else if(ToggleHeatMap.className==="selected")
        {
          heatmap.setMap(map)
        }
  
        //onclick versus click handler
        document.getElementById('ToggleHeatMap').onclick = ()=>
        {
          let id=document.getElementById('ToggleHeatMap')
          if(id.className==="unselected")
          {
            heatmap.setMap(map)
            id.classList.remove("unselected");
            id.classList.add("selected");
            
          }
          else 
          {
            heatmap.setMap(null)
            id.classList.remove('selected');
            id.classList.add('unselected');
             
          }
    }



  
let count={};
for(let i=0;i<bymonths.length;i++){
  if(bymonths[i] in count){
    count[bymonths[i]]+=1;
  }else{
    count[bymonths[i]]=1;
  }
}
 var ctx = document.getElementById('myLineGraph').getContext('2d');
 var ctx2 = document.getElementById('myChart').getContext('2d');
 
let myLineGraph= new Chart(ctx, {
  type: 'line',
  data: {labels: dates.reverse(), datasets:[{label:'Earthquake Magnitude',data:mags.reverse(), backgroundColor: '#86c9e6'}]},
  options: 
    { 
      legend: {
      labels: {
          fontColor: 'white' 
      }},
      tooltips:
        {mode: 'index',
          titleFontSize: 18,
          bodyFontSize: 16,
          intersect: false
        },
    
      title:
        {
          display:true,
          text:'Line Plot of Earthquakes by Magnitude',
          fontColor: 'white',
          fontSize: 20
        },
      responsive: false,
      scales: 
        {
          xAxes: [
            {display: true,
              ticks: 
                {
                fontSize: 20,
                fontColor: 'white'
                },
              scaleLabel:
                {
                  display:true,
                  fontColor: 'white',
                  labelString:'Dates',
                  fontSize: 20
                },
              type: 'time',
              time: 
                {
                   unit: 'day'
                },
                
              }],
          yAxes: [
            {
              ticks: 
                {
                  beginAtZero: true,
                  fontSize: 20,
                  fontColor: 'white'
                },
              scaleLabel:
                {
                  display:true,
                  labelString:'Magnitude',
                  fontSize: 20,  
                  fontColor: 'white'              
                },
                
              
             }],
           
              
        }
    }}
  );
 
let barcolor =[]
let countlen=Object.keys(count).length

for(let i=0; i<countlen; i++){
  let r=244;
  barcolor.push('rgba('+r+','+0+','+0+','+(i+1)/countlen+')')
}
let eventCounts=data.features.length;

 let myChart = new Chart(ctx2,{
  type:'bar',
  data: 
    {
      labels: Object.keys(count).reverse(),
      datasets:[
        {
          label:'Earthquake Counts',
          data:Object.values(count).reverse(),
          borderWidth: 1,
          backgroundColor:barcolor
        }]
    },
  options: {
    legend: {
      labels: {
          fontColor: 'white' 
      }
  },
    tooltips:
      {
        titleFontSize: 18,
        bodyFontSize: 16,
        intersect: false
      },
    responsive: false,
    title:
      {
        display:true,
        text:'Bar Chart of Earthquake Counts by Month',
        fontSize: 20,
        fontColor: 'white'
      },
    scales: 
      {
        xAxes: [
          { 
            scaleLabel:
              {
                display:true,
                labelString:'Months',
                fontSize: 20,
                fontColor: 'white'
              },
            ticks:
              {
                fontSize: 20,
                fontColor: 'white'
              }
          }],
        yAxes: [
          {
            ticks: 
              {
                beginAtZero: true,
                fontSize: 20,
                fontColor: 'white'
              },
            scaleLabel:
              {
                display:true,
                labelString:'Counts',
                fontSize: 20,
                fontColor: 'white'
              }
          }]
      }
}
  
})
const eventCountsDiv=document.getElementById('total-count');
eventCountsDiv.innerHTML='Total Earthquake Count: '+eventCounts
allcharts.push(myChart);
allcharts.push(myLineGraph);
console.log('count',countgraph)
console.log('linechart',myLineGraph.id)
console.log('chart',myChart.id)


if(allcharts[countgraph*2-2]){
  
  let tmp = allcharts[countgraph*2-2]
  tmp.destroy();
}
if(allcharts[countgraph*2-1]){
  let tmp = allcharts[countgraph*2-1]
  tmp.destroy();
}
countgraph++;
const form = document.getElementById('filter');
form.addEventListener('submit',(e)=>{
 
  eventCountsDiv.innerHTML='';
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