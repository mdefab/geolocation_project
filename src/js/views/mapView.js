class mapView {
    _parentElement = document.querySelector('.map');
    _mapMarkers = [];
    

    constructor(){
        let map = L.map('map').setView([0, 0], 1.5);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        this._L = L;
        this._map = map;
    }


    addMapMarker(data){
      if (!data || (Array.isArray(data) && data.length === 0))
          return;
      const popUpContent = `${data.city? data.city: ""} ${data.country}`;
      let marker = this._L.marker([data.latitude, data.longtitude]).addTo(this._map).bindPopup(popUpContent).openPopup();
      this._mapMarkers.push(marker);
    }

    clearMapMarkers(){
        this._mapMarkers.forEach(marker => marker.remove());
        this._mapMarkers = [];
    }

    };


export default new mapView();

