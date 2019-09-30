const axios = require('axios');

document.addEventListener('DOMContentLoaded', () => {

    let isbn = '0201558025';
    axios.get(`/books/${isbn}`)
    .then((response) => {
        console.log(response); 
    })
    .catch(function (error) {
        console.log(error);
    });

    let query = "grace hopper";
    axios.get(`/search?string=${query}`)
    .then((response) => {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
    
})

var requestURL = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-09-01&minmagnitude=5';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';

request.onload = function() {
    let data=JSON.parse(this.response);
    data.forEach(res=>{
      console.log(res);
    })
}

request.send();
