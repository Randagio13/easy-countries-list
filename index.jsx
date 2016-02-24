import EasyCountriesList from './app/app';
import { Component } from 'react';
import ReactDOM from 'react-dom';

class Test extends Component {
  render() {
    // const countriesList = new EasyCountriesList();
    // console.log(countriesList.getAllCountries());
    console.log(EasyCountriesList.getAllCountries());
    console.log(EasyCountriesList.getFilterCountry('italy'));
    const country = EasyCountriesList.getFilterCountry('italy');
    const countries = EasyCountriesList.getAllCountries();
    return (
      <div>
        <pre>{JSON.stringify(country, null, ' ')}</pre>
        <pre>{JSON.stringify(countries, null, ' ')}</pre>
      </div>
    );
  }
}

ReactDOM.render(
  <Test/>,
  document.getElementById('app')
);
