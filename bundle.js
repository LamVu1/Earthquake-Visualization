/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascripts/api.js":
/*!********************************!*\
  !*** ./src/javascripts/api.js ***!
  \********************************/
/*! exports provided: getEvents, getEventsDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEvents", function() { return getEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventsDate", function() { return getEventsDate; });

const getEvents = () => {
    let url='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&minlatitude=32.399&maxlatitude=42.294&minlongitude=-124.321&maxlongitude=-114.258&minmagnitude=2';
    return(
    fetch(url)
    .then((response)=>response.json()));
   
}


const getEventsDate=(start, end, min, max)=>{
    let url;
    if(start && end){
        url=`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${start}&endtime=${end}&minlatitude=32.399&maxlatitude=42.294&minlongitude=-124.321&maxlongitude=-114.258`
    }
    else if(!end){
        url=`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${start}&minlatitude=32.399&maxlatitude=42.294&minlongitude=-124.321&maxlongitude=-114.258`;
    }
    else{
        url='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&minlatitude=32.399&maxlatitude=42.294&minlongitude=-124.321&maxlongitude=-114.258';
    }
    if(min){
        url=url+`&minmagnitude=${min}`;
    }
    if(max){
        url = url+`&maxmagnitude=${max}`
    }
    const loader = document.createElement('div')
    loader.append('loading');
    const map=document.getElementById('map')
    map.innerHTML='loading'
    return(
        fetch(url)
        .then((response)=>{
           
            return(response.json())

        })
        );

}

/***/ }),

/***/ "./src/javascripts/form.js":
/*!*********************************!*\
  !*** ./src/javascripts/form.js ***!
  \*********************************/
/*! exports provided: filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/javascripts/api.js");



const filter = () => {
  const start=document.getElementById('lower').value;
  const end=document.getElementById('higher').value;
  const min=document.getElementById('min-mag').value;
  const max=document.getElementById('max-mag').value
//   document.getElementById('lower').value='';
//   document.getElementById('higher').value='';
  return(Object(_api__WEBPACK_IMPORTED_MODULE_0__["getEventsDate"])(start,end, min, max));
}


/***/ }),

/***/ "./src/javascripts/index.js":
/*!**********************************!*\
  !*** ./src/javascripts/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/javascripts/api.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ "./src/javascripts/map.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/javascripts/utils.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form */ "./src/javascripts/form.js");










document.addEventListener('DOMContentLoaded', () => {
    Object(_api__WEBPACK_IMPORTED_MODULE_0__["getEvents"])().then((data)=>Object(_map__WEBPACK_IMPORTED_MODULE_1__["initMap"])(data));
    const form = document.getElementById('filter');
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        Object(_form__WEBPACK_IMPORTED_MODULE_3__["filter"])().then((data)=>Object(_map__WEBPACK_IMPORTED_MODULE_1__["initMap"])(data))
    
    })


    // getEvents().then((data)=>initMap(data))
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


/***/ }),

/***/ "./src/javascripts/map.js":
/*!********************************!*\
  !*** ./src/javascripts/map.js ***!
  \********************************/
/*! exports provided: initMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initMap", function() { return initMap; });





const initMap=function(data) {

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
      "stylers": [
        {
          "visibility": "on"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#9cdfda"
        },
        {
          "visibility": "on"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    }
    
  
    
  ]

  
  
    const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 36.778, lng:  -119.417},
    zoom: 7,
    styles: style,
    gestureHandling: 'greedy'
    // mapTypeId: 'terrain'

  });
  let markers=[];
 
  
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

      markers.push(marker)
      // marker.setOptions({'opacity': 0})
     

   let infowindow = new google.maps.InfoWindow({
      content: "<p>"+'Location: '+content +"<br />"+'Date: '+d+"<br />"+ ' Magnitude: '+mag+ "<p>"
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


  };

  var markerCluster = new MarkerClusterer(map, markers,
    {imagePath: './src/assets/m'});
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

/***/ }),

/***/ "./src/javascripts/utils.js":
/*!**********************************!*\
  !*** ./src/javascripts/utils.js ***!
  \**********************************/
/*! exports provided: parseData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseData", function() { return parseData; });
const parseData=(arr)=>{
    let res=[];
    arr.forEach((el)=>{
        res.push(el)
    })
    return res;
}




/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map