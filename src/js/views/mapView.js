class mapView {
    _mapMarkers = []

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
      const popUpContent = `<b>${data.city? data.city: ""} ${data.country}</b> ${data.description? `<br>${data.description}`: ""}`;
      let marker = this._L.marker([data.latitude, data.longtitude]).addTo(this._map).bindPopup(popUpContent).openPopup();
      this._map.setView([data.latitude, data.longtitude], Number(document.getElementById("zoom-on-add").value)/2);
      marker.on('click', function(e){
        this._map.setView([e.latlng.lat, e.latlng.lng], Number(document.getElementById("zoom-on-click").value)/2);
      });
      this._mapMarkers.push(marker);
    }

    clearMapMarkers(){
        this._mapMarkers.forEach(marker => marker.remove());
        this._mapMarkers = [];
    }

    undoMapMarker(){
        if(this._mapMarkers.length === 0) return;
        this._mapMarkers.pop().remove();
    }

    };


export default new mapView();

