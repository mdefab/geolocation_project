class mapInfoView {
    _parentElement = document.querySelector('.map-description');
    _data;

    _generateMarkup(){
        return `
        <h2> ${this._data.standard.city? this._data.standard.city :''}, ${this._data.standard.countryname}
        <p> Latitude: ${this._data.latt} Longtitude: ${this._data.longt} </p>`
        };


    render(data) {
        if (!data || (Array.isArray(data) && data.length === 0))
          return;
    
        this._data = data;
        const markup = this._generateMarkup();
    
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
      }

    renderError(err){
        const markup = `<p> ${err}</p>`
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
      }


    _clear() {
        this._parentElement.innerHTML = '';
      };

    };


export default new mapInfoView();