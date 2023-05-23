/* Control application logic. Calls on model and view. Connects it all together. */
import * as model from './model.js';
import sideBarView from "./views/sideBarView.js";
import mapView from "./views/mapView.js";


const controlMapMarkers = async function(){
    // get data from model
    const data = await model.getLatLong();
    // provide data to View to display map marker
    mapView.renderMap(data);
}

const init = function(){
    sideBarView._addHandlerMapMarker(controlMapMarkers);
};

init();