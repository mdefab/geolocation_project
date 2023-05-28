class mapView {
    _parentElement = document.querySelector('.map');

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
      const popUpContent = `${data.standard.city? data.standard.city: ""} ${data.standard.countryname}`;
      this._L.marker([data.latt, data.longt]).addTo(this._map).bindPopup(popUpContent).openPopup();;
    }

    };


export default new mapView();

