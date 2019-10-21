
export const getEvents = () => {
    let url='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&minlatitude=32.399&maxlatitude=42.294&minlongitude=-124.321&maxlongitude=-114.258&minmagnitude=3';
    return(
    fetch(url)
    .then((response)=>response.json()));
   
}


export const getEventsDate=(start, end, min, max)=>{
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