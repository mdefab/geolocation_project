class sideBarView {
    _parentElement = document.querySelector('.sidebar');
    _btn = document.querySelector('.btn--map-marker');
    _location = document.getElementById('placename');
    _region = document.getElementById('region');

    _addHandlerMapMarker(handler){
        this._btn.addEventListener('click', function(){
            handler();
        })
    }
};


export default new sideBarView();

