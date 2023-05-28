class sideBarView {
    _parentElement = document.querySelector('.sidebar');
    _btnMap = document.querySelector('.btn--map-marker');
    _btnData= document.querySelector('.btn--view-data');
    _btnClear= document.querySelector('.btn--clear-map');
    _btnMichael= document.querySelector('.btn--michael-data');
    _location;

    _addHandlerMapMarker(handler){
        this._btnMap.addEventListener('click', function(){
            this._location = document.getElementById('placename').value;
            if(!this._location) return;
            handler(this._location);
        })
    };

    _addHandlerViewData(handler){
        this._btnData.addEventListener('click', function(){
            handler();
        })
        
    };

    _addHandlerClearMap(handler){
        this._btnClear.addEventListener('click', function(){
            handler();
        })
    };

    _addHandlerViewMichaelMarkers(handler){
        this._btnMichael.addEventListener('click', function(){
            handler();
        })
        
    };

};


export default new sideBarView();

