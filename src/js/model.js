/* maintains state: state object, createMapobject function, loadResults object, ~upload data function */

import { GeocodeURL } from "./config.js";
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
    const urlEndpoint = `${GeocodeURL}${location}?json=1&auth=${AUTH? AUTH: ''}`
    const data = await getJSON(urlEndpoint)
    state.markers.push(
    {latitude: data.latt,
    longtitude: data.longt,
    city: data.standard.city,
    country: data.standard.countryname}
    )
    return data;
};

// 2) get map from lat/long 

// 2b) Other info to display?

// test model connection to controller:



