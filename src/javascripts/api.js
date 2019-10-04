
export const getEvents = () => {
    let url='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&minlatitude=32.399&maxlatitude=42.294&minlongitude=-124.321&maxlongitude=-114.258';
    return(
    fetch(url)
    .then((response)=>response.json()));
   
}

