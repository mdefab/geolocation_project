class sideBarView {
    _parentElement = document.querySelector('.sidebar');
    _btn = document.querySelector('.btn--map-marker');
    _location;

    _addHandlerMapMarker(handler){
        this._btn.addEventListener('click', function(){
            this._location = document.getElementById('placename').value;
            if(!this._location) return;
            handler(this._location);
        })
    };
};


export default new sideBarView();

