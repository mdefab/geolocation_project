/* Control application logic. Calls on model and view. Connects it all together. */
import * as model from './model.js';
import sideBarView from "./views/sideBarView.js";
import mapView from "./views/mapView.js";
import mapInfoView from './views/mapInfoView.js';


const controlMapMarkers = async function(location){
    // get data from model
    const data = await model.getGeoData(location);
    // provide data to View to display map marker
    mapView.renderMap(data);
    mapInfoView.render(data);
}

const init = function(){
    sideBarView._addHandlerMapMarker(controlMapMarkers);
};

init();