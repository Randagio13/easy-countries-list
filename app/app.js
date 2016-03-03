import countriesList from './utils/countries.json';

class EasyCountriesList {
  countries = countriesList.countries;
  getAllCountries = () => {
    return this.countries;
  };
  filterByCountryName = (countryName) => {
    const countryResult = this.countries.filter(
      country => country.name.toLowerCase() === countryName.toLowerCase()
    );
    return countryResult[0];
  };
  filterByCountryCode = (countryCode) => {
    const countryResult = this.countries.filter(
      country => country.countryCode.toLowerCase() === countryCode.toLowerCase()
    );
    return countryResult[0];
  };
}

export default new EasyCountriesList();
