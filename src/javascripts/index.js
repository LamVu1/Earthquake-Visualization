
import {bob} from './api';
import {initMap} from './map';
import {parseData} from './utils';





document.addEventListener('DOMContentLoaded', () => {
initMap();

})















// var requestURL = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-09-01&minmagnitude=5';
// var request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';

// request.onload = function() {
//     let data=JSON.parse(this.response);
//     data.forEach(res=>{
//       console.log(res);
//     })
// }

// request.send();
