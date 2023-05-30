export const TIMEOUT_SEC = 10;
export const GeocodeURL = "https://geocode.xyz/" /* full api: https://geocode.xyz/?locate=location&outputformat */
// export const API_THROTTLE_MS = 1500; // was neccessary to avoid hitting api call rate limit for free category with old
//model for fetching MichaelData.

// storing MichaelData here because free hosting website is frontend only 
// and hardcoding object data to avoid using geocode credits
export const MichaelData = [
    {city: "Kingston, ON",
    country: "Canada",
    latitude: "44.2312",
    longtitude: "-76.4860",
    description: "My birthplace! 1992",
    }, 
    {city: "Oakville, ON",
    country: "Canada",
    latitude: "43.4675",
    longtitude: "-79.6877",
    description: "My hometown. This is where I went to elementary and high school. 1993-2012",
    }, 
    {city: "Hamilton, ON",
    country: "Canada",
    latitude: "43.2557",
    longtitude: "-79.8711",
    description: "3rd and 4th year student at McMaster. 2013-2015",
    }, 
    {city: "Orangeville, ON",
    country: "Canada",
    latitude: "43.9200",
    longtitude: "-80.0943",
    description: "I lived here with my family when I was recovering from knee surgeries between 2012-2013, and 2015-2016. And I returned again during covid from 2020-2021",
    }, 
    {city: "Fredericton, NB",
    country: "Canada",
    latitude: "45.9636",
    longtitude: "-66.6431",
    description: "Law school at the University of New Brunswick. 2016-2019",
    }, 
    {city: "North York, ON",
    country: "Canada",
    latitude: "43.7615",
    longtitude: "-79.4111",
    description: "Ten months articling at an employment and disability law firm. 2019-2020",
    }, 
    {city: "Burlington, ON",
    country: "Canada",
    latitude: "43.3255",
    longtitude: "-79.7990",
    description: "Working as a Notary Public. Summer 2021-present",
    }, 
];

