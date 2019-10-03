
export const initMap=function() {
    let map;
    map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 36.778, lng:  -119.417},
    zoom: 7
  });
  return map;
  
}


