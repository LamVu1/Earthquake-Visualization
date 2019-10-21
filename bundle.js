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

/***/ "./node_modules/constants-browserify/constants.json":
/*!**********************************************************!*\
  !*** ./node_modules/constants-browserify/constants.json ***!
  \**********************************************************/
/*! exports provided: O_RDONLY, O_WRONLY, O_RDWR, S_IFMT, S_IFREG, S_IFDIR, S_IFCHR, S_IFBLK, S_IFIFO, S_IFLNK, S_IFSOCK, O_CREAT, O_EXCL, O_NOCTTY, O_TRUNC, O_APPEND, O_DIRECTORY, O_NOFOLLOW, O_SYNC, O_SYMLINK, O_NONBLOCK, S_IRWXU, S_IRUSR, S_IWUSR, S_IXUSR, S_IRWXG, S_IRGRP, S_IWGRP, S_IXGRP, S_IRWXO, S_IROTH, S_IWOTH, S_IXOTH, E2BIG, EACCES, EADDRINUSE, EADDRNOTAVAIL, EAFNOSUPPORT, EAGAIN, EALREADY, EBADF, EBADMSG, EBUSY, ECANCELED, ECHILD, ECONNABORTED, ECONNREFUSED, ECONNRESET, EDEADLK, EDESTADDRREQ, EDOM, EDQUOT, EEXIST, EFAULT, EFBIG, EHOSTUNREACH, EIDRM, EILSEQ, EINPROGRESS, EINTR, EINVAL, EIO, EISCONN, EISDIR, ELOOP, EMFILE, EMLINK, EMSGSIZE, EMULTIHOP, ENAMETOOLONG, ENETDOWN, ENETRESET, ENETUNREACH, ENFILE, ENOBUFS, ENODATA, ENODEV, ENOENT, ENOEXEC, ENOLCK, ENOLINK, ENOMEM, ENOMSG, ENOPROTOOPT, ENOSPC, ENOSR, ENOSTR, ENOSYS, ENOTCONN, ENOTDIR, ENOTEMPTY, ENOTSOCK, ENOTSUP, ENOTTY, ENXIO, EOPNOTSUPP, EOVERFLOW, EPERM, EPIPE, EPROTO, EPROTONOSUPPORT, EPROTOTYPE, ERANGE, EROFS, ESPIPE, ESRCH, ESTALE, ETIME, ETIMEDOUT, ETXTBSY, EWOULDBLOCK, EXDEV, SIGHUP, SIGINT, SIGQUIT, SIGILL, SIGTRAP, SIGABRT, SIGIOT, SIGBUS, SIGFPE, SIGKILL, SIGUSR1, SIGSEGV, SIGUSR2, SIGPIPE, SIGALRM, SIGTERM, SIGCHLD, SIGCONT, SIGSTOP, SIGTSTP, SIGTTIN, SIGTTOU, SIGURG, SIGXCPU, SIGXFSZ, SIGVTALRM, SIGPROF, SIGWINCH, SIGIO, SIGSYS, SSL_OP_ALL, SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION, SSL_OP_CIPHER_SERVER_PREFERENCE, SSL_OP_CISCO_ANYCONNECT, SSL_OP_COOKIE_EXCHANGE, SSL_OP_CRYPTOPRO_TLSEXT_BUG, SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS, SSL_OP_EPHEMERAL_RSA, SSL_OP_LEGACY_SERVER_CONNECT, SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER, SSL_OP_MICROSOFT_SESS_ID_BUG, SSL_OP_MSIE_SSLV2_RSA_PADDING, SSL_OP_NETSCAPE_CA_DN_BUG, SSL_OP_NETSCAPE_CHALLENGE_BUG, SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG, SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG, SSL_OP_NO_COMPRESSION, SSL_OP_NO_QUERY_MTU, SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION, SSL_OP_NO_SSLv2, SSL_OP_NO_SSLv3, SSL_OP_NO_TICKET, SSL_OP_NO_TLSv1, SSL_OP_NO_TLSv1_1, SSL_OP_NO_TLSv1_2, SSL_OP_PKCS1_CHECK_1, SSL_OP_PKCS1_CHECK_2, SSL_OP_SINGLE_DH_USE, SSL_OP_SINGLE_ECDH_USE, SSL_OP_SSLEAY_080_CLIENT_DH_BUG, SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG, SSL_OP_TLS_BLOCK_PADDING_BUG, SSL_OP_TLS_D5_BUG, SSL_OP_TLS_ROLLBACK_BUG, ENGINE_METHOD_DSA, ENGINE_METHOD_DH, ENGINE_METHOD_RAND, ENGINE_METHOD_ECDH, ENGINE_METHOD_ECDSA, ENGINE_METHOD_CIPHERS, ENGINE_METHOD_DIGESTS, ENGINE_METHOD_STORE, ENGINE_METHOD_PKEY_METHS, ENGINE_METHOD_PKEY_ASN1_METHS, ENGINE_METHOD_ALL, ENGINE_METHOD_NONE, DH_CHECK_P_NOT_SAFE_PRIME, DH_CHECK_P_NOT_PRIME, DH_UNABLE_TO_CHECK_GENERATOR, DH_NOT_SUITABLE_GENERATOR, NPN_ENABLED, RSA_PKCS1_PADDING, RSA_SSLV23_PADDING, RSA_NO_PADDING, RSA_PKCS1_OAEP_PADDING, RSA_X931_PADDING, RSA_PKCS1_PSS_PADDING, POINT_CONVERSION_COMPRESSED, POINT_CONVERSION_UNCOMPRESSED, POINT_CONVERSION_HYBRID, F_OK, R_OK, W_OK, X_OK, UV_UDP_REUSEADDR, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"O_RDONLY\":0,\"O_WRONLY\":1,\"O_RDWR\":2,\"S_IFMT\":61440,\"S_IFREG\":32768,\"S_IFDIR\":16384,\"S_IFCHR\":8192,\"S_IFBLK\":24576,\"S_IFIFO\":4096,\"S_IFLNK\":40960,\"S_IFSOCK\":49152,\"O_CREAT\":512,\"O_EXCL\":2048,\"O_NOCTTY\":131072,\"O_TRUNC\":1024,\"O_APPEND\":8,\"O_DIRECTORY\":1048576,\"O_NOFOLLOW\":256,\"O_SYNC\":128,\"O_SYMLINK\":2097152,\"O_NONBLOCK\":4,\"S_IRWXU\":448,\"S_IRUSR\":256,\"S_IWUSR\":128,\"S_IXUSR\":64,\"S_IRWXG\":56,\"S_IRGRP\":32,\"S_IWGRP\":16,\"S_IXGRP\":8,\"S_IRWXO\":7,\"S_IROTH\":4,\"S_IWOTH\":2,\"S_IXOTH\":1,\"E2BIG\":7,\"EACCES\":13,\"EADDRINUSE\":48,\"EADDRNOTAVAIL\":49,\"EAFNOSUPPORT\":47,\"EAGAIN\":35,\"EALREADY\":37,\"EBADF\":9,\"EBADMSG\":94,\"EBUSY\":16,\"ECANCELED\":89,\"ECHILD\":10,\"ECONNABORTED\":53,\"ECONNREFUSED\":61,\"ECONNRESET\":54,\"EDEADLK\":11,\"EDESTADDRREQ\":39,\"EDOM\":33,\"EDQUOT\":69,\"EEXIST\":17,\"EFAULT\":14,\"EFBIG\":27,\"EHOSTUNREACH\":65,\"EIDRM\":90,\"EILSEQ\":92,\"EINPROGRESS\":36,\"EINTR\":4,\"EINVAL\":22,\"EIO\":5,\"EISCONN\":56,\"EISDIR\":21,\"ELOOP\":62,\"EMFILE\":24,\"EMLINK\":31,\"EMSGSIZE\":40,\"EMULTIHOP\":95,\"ENAMETOOLONG\":63,\"ENETDOWN\":50,\"ENETRESET\":52,\"ENETUNREACH\":51,\"ENFILE\":23,\"ENOBUFS\":55,\"ENODATA\":96,\"ENODEV\":19,\"ENOENT\":2,\"ENOEXEC\":8,\"ENOLCK\":77,\"ENOLINK\":97,\"ENOMEM\":12,\"ENOMSG\":91,\"ENOPROTOOPT\":42,\"ENOSPC\":28,\"ENOSR\":98,\"ENOSTR\":99,\"ENOSYS\":78,\"ENOTCONN\":57,\"ENOTDIR\":20,\"ENOTEMPTY\":66,\"ENOTSOCK\":38,\"ENOTSUP\":45,\"ENOTTY\":25,\"ENXIO\":6,\"EOPNOTSUPP\":102,\"EOVERFLOW\":84,\"EPERM\":1,\"EPIPE\":32,\"EPROTO\":100,\"EPROTONOSUPPORT\":43,\"EPROTOTYPE\":41,\"ERANGE\":34,\"EROFS\":30,\"ESPIPE\":29,\"ESRCH\":3,\"ESTALE\":70,\"ETIME\":101,\"ETIMEDOUT\":60,\"ETXTBSY\":26,\"EWOULDBLOCK\":35,\"EXDEV\":18,\"SIGHUP\":1,\"SIGINT\":2,\"SIGQUIT\":3,\"SIGILL\":4,\"SIGTRAP\":5,\"SIGABRT\":6,\"SIGIOT\":6,\"SIGBUS\":10,\"SIGFPE\":8,\"SIGKILL\":9,\"SIGUSR1\":30,\"SIGSEGV\":11,\"SIGUSR2\":31,\"SIGPIPE\":13,\"SIGALRM\":14,\"SIGTERM\":15,\"SIGCHLD\":20,\"SIGCONT\":19,\"SIGSTOP\":17,\"SIGTSTP\":18,\"SIGTTIN\":21,\"SIGTTOU\":22,\"SIGURG\":16,\"SIGXCPU\":24,\"SIGXFSZ\":25,\"SIGVTALRM\":26,\"SIGPROF\":27,\"SIGWINCH\":28,\"SIGIO\":23,\"SIGSYS\":12,\"SSL_OP_ALL\":2147486719,\"SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION\":262144,\"SSL_OP_CIPHER_SERVER_PREFERENCE\":4194304,\"SSL_OP_CISCO_ANYCONNECT\":32768,\"SSL_OP_COOKIE_EXCHANGE\":8192,\"SSL_OP_CRYPTOPRO_TLSEXT_BUG\":2147483648,\"SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS\":2048,\"SSL_OP_EPHEMERAL_RSA\":0,\"SSL_OP_LEGACY_SERVER_CONNECT\":4,\"SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER\":32,\"SSL_OP_MICROSOFT_SESS_ID_BUG\":1,\"SSL_OP_MSIE_SSLV2_RSA_PADDING\":0,\"SSL_OP_NETSCAPE_CA_DN_BUG\":536870912,\"SSL_OP_NETSCAPE_CHALLENGE_BUG\":2,\"SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG\":1073741824,\"SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG\":8,\"SSL_OP_NO_COMPRESSION\":131072,\"SSL_OP_NO_QUERY_MTU\":4096,\"SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION\":65536,\"SSL_OP_NO_SSLv2\":16777216,\"SSL_OP_NO_SSLv3\":33554432,\"SSL_OP_NO_TICKET\":16384,\"SSL_OP_NO_TLSv1\":67108864,\"SSL_OP_NO_TLSv1_1\":268435456,\"SSL_OP_NO_TLSv1_2\":134217728,\"SSL_OP_PKCS1_CHECK_1\":0,\"SSL_OP_PKCS1_CHECK_2\":0,\"SSL_OP_SINGLE_DH_USE\":1048576,\"SSL_OP_SINGLE_ECDH_USE\":524288,\"SSL_OP_SSLEAY_080_CLIENT_DH_BUG\":128,\"SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG\":0,\"SSL_OP_TLS_BLOCK_PADDING_BUG\":512,\"SSL_OP_TLS_D5_BUG\":256,\"SSL_OP_TLS_ROLLBACK_BUG\":8388608,\"ENGINE_METHOD_DSA\":2,\"ENGINE_METHOD_DH\":4,\"ENGINE_METHOD_RAND\":8,\"ENGINE_METHOD_ECDH\":16,\"ENGINE_METHOD_ECDSA\":32,\"ENGINE_METHOD_CIPHERS\":64,\"ENGINE_METHOD_DIGESTS\":128,\"ENGINE_METHOD_STORE\":256,\"ENGINE_METHOD_PKEY_METHS\":512,\"ENGINE_METHOD_PKEY_ASN1_METHS\":1024,\"ENGINE_METHOD_ALL\":65535,\"ENGINE_METHOD_NONE\":0,\"DH_CHECK_P_NOT_SAFE_PRIME\":2,\"DH_CHECK_P_NOT_PRIME\":1,\"DH_UNABLE_TO_CHECK_GENERATOR\":4,\"DH_NOT_SUITABLE_GENERATOR\":8,\"NPN_ENABLED\":1,\"RSA_PKCS1_PADDING\":1,\"RSA_SSLV23_PADDING\":2,\"RSA_NO_PADDING\":3,\"RSA_PKCS1_OAEP_PADDING\":4,\"RSA_X931_PADDING\":5,\"RSA_PKCS1_PSS_PADDING\":6,\"POINT_CONVERSION_COMPRESSED\":2,\"POINT_CONVERSION_UNCOMPRESSED\":4,\"POINT_CONVERSION_HYBRID\":6,\"F_OK\":0,\"R_OK\":4,\"W_OK\":2,\"X_OK\":1,\"UV_UDP_REUSEADDR\":4}");

/***/ }),

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
    let url='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&minlatitude=32.399&maxlatitude=42.294&minlongitude=-124.321&maxlongitude=-114.258&minmagnitude=3';
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
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form */ "./src/javascripts/form.js");









document.addEventListener('DOMContentLoaded', () => {
    Object(_api__WEBPACK_IMPORTED_MODULE_0__["getEvents"])().then((data)=>Object(_map__WEBPACK_IMPORTED_MODULE_1__["initMap"])(data));
    // const form = document.getElementById('filter');
    // form.addEventListener('submit',(e)=>{
    //     e.preventDefault();
    //     filter().then((data)=>initMap(data))
    
    // })
    // initMap();

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
/* harmony import */ var _mapstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapstyle */ "./src/javascripts/mapstyle.js");
/* harmony import */ var constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constants */ "./node_modules/constants-browserify/constants.json");
var constants__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! constants */ "./node_modules/constants-browserify/constants.json", 1);




const initMap=function(data) {
  
  const map = new google.maps.Map(document.getElementById('map'),
    {
      center: { lat: 36.778, lng: -119.417 },
      zoom: 7,
      styles: _mapstyle__WEBPACK_IMPORTED_MODULE_0__["style"],
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

/***/ }),

/***/ "./src/javascripts/mapstyle.js":
/*!*************************************!*\
  !*** ./src/javascripts/mapstyle.js ***!
  \*************************************/
/*! exports provided: style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });

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

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map