

// export const 
const parsedData=(arr)=>{
    let res=[];
    arr.forEach((dat)=>{
        res.push(dat)
    })
    return res;
}



const bob = () => {
    let url='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-09-01&minmagnitude=5';

    fetch(url)
    .then((response)=>{return response.json()})
    .then((data)=>{let fdat = parsedData(data.feature)} drawChart(fdat));
   
}


// let da=bob();
// debugger
// da.forEach((d)=>{
//     console.log(d)
// })
// parse=()=>{
//     // debugger
//     let dat=console.log(bob().then())
//     debugger
//     dat.forEach((d)=>{
//         console.log(d)
//     })
//     // debugger
// }

// parse();