/* Control application logic. Calls on model and view. Connects it all together. */
import * as model from './model.js';
import sideBarView from "./views/sideBarView.js";
import mapView from "./views/mapView.js";
import mapInfoView from './views/mapInfoView.js';


const controlMapMarkers = async function(location){
    // get data from model
    try{
    const data = await model.getGeoData(location);
    // provide data to View to display map marker
    // mapView.renderMap(data);
    mapInfoView.render(data);
    mapView.addMapMarker(data);
    }catch(err){
        mapInfoView.renderError(err);
    }
};

const controlViewData = function(){
    console.log("View Data")
};

const controlClearMap = function(){
    console.log("Clear Map")
};

const controlViewMichaelMarkers = function(){
    console.log("Michael's Markers")
};

const init = function(){
    sideBarView._addHandlerMapMarker(controlMapMarkers);
    sideBarView._addHandlerViewData(controlViewData);
    sideBarView._addHandlerClearMap(controlClearMap);
    sideBarView._addHandlerViewMichaelMarkers(controlViewMichaelMarkers);
};

init();