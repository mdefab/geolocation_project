import { TIMEOUT_SEC } from "./config.js";

const timeout = function (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} ${s === 1? 'second': 'seconds'}`));
      }, s * 1000);
    });
  };
  
  export const getJSON = async function (url) {
    try {
      const fetchData = fetch(url);
      const response = await Promise.race([fetchData, timeout(TIMEOUT_SEC)]);
      const data = await response.json();
      if (!response.ok) throw new Error(`${data.message} (${response.status})`);

      return data;
    } catch (err) {
      throw err;
    }
  };