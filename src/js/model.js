/* maintains state: state object, createMapobject function, loadResults object, ~upload data function */

import { GeocodeURL } from "./config.js";
import { MichaelData } from "./config.js";
import { AUTH } from "./env.js";
import { getJSON } from "./helper.js";

//test api endpoint
// const location = 'Burlington Canada';
// const urlEndpoint = `${GeocodeURL}?${location}${region? '?region=': '' }${region}?json=1&auth=${AUTH}`



export const state = {
    markers: [],
};


// 1) get lat/long from location 

export const getGeoData = async function(location){
    try{
        const urlEndpoint = `${GeocodeURL}${location}?json=1&auth=${AUTH? AUTH: ''}`
        const data = await getJSON(urlEndpoint)
        console.log(data);
        if (data.error) throw new Error("Error fetching location")
        
        const marker = {latitude: data.latt,
        longtitude: data.longt,
        city: data.standard.city,
        country: data.standard.countryname};
        state.markers.push(marker)

        return marker;
    }catch(err){
        throw(err)
    }
};

export const clearMarkersData = function(){
    state.markers = [];
}


const sleep = function(ms){
    return new Promise((resolve) => setTimeout(resolve, ms)) 
};


// Error: fetch throttling because too many requests for unpaid category (over Rate Limit). have to slow it down with a timeout function.
// TODO: fix this functino to avoid rate limit throttle for api call
export const michaelMarkerData = function(){
    clearMarkersData();
    MichaelData.map(async data => {
        await sleep(1000).then(console.log(data.location))
    })
    };
    






