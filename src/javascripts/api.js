
export const bob = () => {
    let url='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-09-01&minmagnitude=5';
    return(
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>(data)));
   
}

