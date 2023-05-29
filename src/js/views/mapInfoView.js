class mapInfoView {
    _parentElement = document.querySelector('.map-description');

    _generateMarkup(data){
        return `
        <h2> ${data.standard.city? data.standard.city :''}, ${data.standard.countryname}
        <p> Latitude: ${Number(data.latt).toFixed(2)} Longtitude: ${Number(data.longt).toFixed(2)} </p>`
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
        const markup = data.map((marker, index) => {
          return `
          <p> <strong> ${index + 1}) ${marker.city? marker.city :''}, ${marker.country} </strong><br>
           <u>Latitude:</u> ${Number(marker.latitude).toFixed(2)} <u>Longtitude:</u> ${Number(marker.longtitude).toFixed(2)} </p>`
        }).join(" ");
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