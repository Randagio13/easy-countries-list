import EasyCountriesList from './app/app';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Test extends Component {
  render() {
    const country = EasyCountriesList.filterByCountryName('united states');
    const countryCode = EasyCountriesList.filterByCountryCode('it');
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
