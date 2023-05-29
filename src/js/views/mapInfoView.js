class mapInfoView {
    _parentElement = document.querySelector('.map-description');

    _generateMarkup(data){
        return `
        <h2> ${data.standard.city? data.standard.city :''}, ${data.standard.countryname}
        <p> Latitude: ${data.latt} Longtitude: ${data.longt} </p>`
        };


    render(data) {
        if (!data || (Array.isArray(data) && data.length === 0))
          return;
    
        // this._data = data;
        const markup = this._generateMarkup(data);
    
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
      }

    renderAll(data){
        this._data = data;
        const markup = data.map(marker => {
          return `
          <h2> ${marker.city? marker.city :''}, ${marker.country}
          <p> Latitude: ${marker.latitude} Longtitude: ${marker.longtitude} </p>`
        }).join("<br>");
        console.log(markup);
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
      }
    

    renderError(err){
        const markup = `<p> ${err}</p> <p>The location may be a street address/postal code/landmark/ip address/city name/etc. </p>`
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
      }


    _clear() {
        this._parentElement.innerHTML = '';
      };

    };


export default new mapInfoView();