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
    try {
        const data = model.state.markers;
        if(!data || (Array.isArray(data) && data.length === 0)) throw new Error("No marker data available. Please add markers first.")
        mapInfoView.renderAll(data);
    } catch(err){
        mapInfoView.renderError(err);
    }
    return
};

const controlClearMap = function(){
    model.clearMarkersData();
    mapView.clearMapMarkers();
    mapInfoView.clear();
};

const undoLastMarker = function(){
    const lastMarker = model.undoLastMarker();
    mapView.undoMapMarker();
    mapInfoView.render(lastMarker, true);

};

const controlViewMichaelMarkers = function(){
    mapInfoView.clear();
    mapView.clearMapMarkers();
    const michaelMarkers = model.michaelMarkerData();
    mapInfoView.renderAll(michaelMarkers);
    michaelMarkers.forEach(marker => mapView.addMapMarker(marker));
};

const init = function(){
    sideBarView.addHandlerMapMarker(controlMapMarkers);
    sideBarView.addHandlerViewData(controlViewData);
    sideBarView.addHandlerClearMap(controlClearMap);
    sideBarView.addHandlerUndoLastMarker(undoLastMarker);
    sideBarView.addHandlerViewMichaelMarkers(controlViewMichaelMarkers);   
};

init();