
export const getEvents = () => {
    let url='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&minlatitude=32.399&maxlatitude=42.294&minlongitude=-124.321&maxlongitude=-114.258&minmagnitude=3';
    const loader = document.getElementById('loader')
    loader.classList.remove('hidden')
    loader.classList.add('shown')
    return(
    fetch(url)
    .then((response)=>{
        setTimeout(()=>{
            loader.classList.remove('shown');
            loader.classList.add('hidden')
        
},1000);
return(
response.json())}));
   
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
    const loader = document.getElementById('loader')
    loader.classList.remove('hidden')
    loader.classList.add('shown')
    
   
    const map=document.getElementById('map')

    return(
        fetch(url)
        .then((response)=>{
             setTimeout(()=>{
                loader.classList.remove('shown');
                loader.classList.add('hidden')
    
    },1000)
      
            return(response.json())

        })
        );
}