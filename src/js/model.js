/* maintains state: state object, createMapobject function, loadResults object, ~upload data function */

import { GeocodeURL } from "./config.js";
import { MichaelData } from "./config.js";
import { AUTH } from "./env.js";
import { getJSON } from "./helper.js";


export const state = {
    markers: [],
};


// 1) get lat/long from location 

export const getGeoData = async function(location){
    try{
        const urlEndpoint = `${GeocodeURL}${location}?json=1&auth=${AUTH? AUTH: ''}`
        const data = await getJSON(urlEndpoint)
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

export const undoLastMarker = function(){
    if(state.markers.length === 0) return;
    return state.markers.pop();
}


export const michaelMarkerData = function(){
    state.markers = MichaelData;
    return MichaelData;
}



// Error: fetch throttling because too many requests for unpaid category (over Rate Limit). 
// Used these functions and import to slow it down to avoid rate limit.
// Functions worked, but opting to not use because it takes too many credits from geocode api, hardcoding 
// data into Michael Data instead.

// import { API_THROTTLE_MS } from "./config.js";

// const sleep = function(ms){
//     return new Promise((resolve) => setTimeout(resolve, ms)) 
// };

// export const michaelMarkerData = async function(){
//     clearMarkersData();
//     for(let i = 0; i < MichaelData.length; i++){
//         await getGeoData(MichaelData[i].location);
//         await sleep(API_THROTTLE_MS);
//     } 
//     };
    






