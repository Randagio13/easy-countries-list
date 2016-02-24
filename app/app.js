import countriesList from './utils/countries.json';

class EasyCountriesList {
  countries = countriesList.countries;
  getAllCountries = () => {
    return this.countries;
  };
  getFilterCountry = (countryName) => {
    const countryResult = this.countries.filter(
      country => country.name.toLowerCase() === countryName.toLowerCase()
    );
    return countryResult[0];
  };
}

export default new EasyCountriesList();
