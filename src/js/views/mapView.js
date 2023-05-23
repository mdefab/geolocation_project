class mapView {
    _parentElement = document.querySelector('.mapview');
    data;

    //this view will generate a description box of the location + map

    _generateMarkup(){
        return `
        <h2> ${this._data.standard.city}, ${this._data.standard.countryname}
        <p> Latitude: ${this._data.latt} Longtitude: ${this._data.longt} </p>`
        };


    renderMap(data) {
        if (!data || (Array.isArray(data) && data.length === 0))
          return;
    
        this._data = data;
        const markup = this._generateMarkup();
    
        this._clearMap();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
      }


    _clearMap() {
        this._parentElement.innerHTML = '';
      };

    };


export default new mapView();

//perhaps render error message if error or no data