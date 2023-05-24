class mapView {
    _parentElement = document.querySelector('.map');

    constructor(){
      let map = L.map('map').setView([1, 1], 1);
        console.log(map);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
    }

    // method to render a marker w/ a popup description (perhaps panto and/or zoom in on marker)

    // renderMap(data) {
    //     if (!data || (Array.isArray(data) && data.length === 0))
    //       return;
    //     this._clear();
    //   }


    _clear() {
        this._parentElement.innerHTML = '';
      };

    };


export default new mapView();

//perhaps render error message if error or no data