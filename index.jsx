import EasyCountriesList from './app/app';
import { Component } from 'react';
import ReactDOM from 'react-dom';

class Test extends Component {
  render() {
    const country = EasyCountriesList.getFilterCountry('italy');
    const countryCode = EasyCountriesList.getFilterCountryCode('it');
    const countries = EasyCountriesList.getAllCountries();
    return (
      <div>
        <pre>{JSON.stringify(country, null, ' ')}</pre>
        <pre>{JSON.stringify(countryCode, null, ' ')}</pre>
        <pre>{JSON.stringify(countries, null, ' ')}</pre>
      </div>
    );
  }
}

ReactDOM.render(
  <Test/>,
  document.getElementById('app')
);
