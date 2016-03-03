import expect from 'expect';
import EasyCountriesList from '../app/app';
import countriesList from '../app/utils/countries.json';

describe('Test EasyCountriesList', () => {
  it('Test get countries list', () => {
    expect(
      EasyCountriesList.getAllCountries()
    ).toEqual(
      countriesList.countries
    );
  });
  it('Test get country from country name', () => {
    const countryName = 'italy';
    const countryResult = {
      countryCode: 'IT',
      name: 'Italy'
    };
    expect(
      EasyCountriesList.filterByCountryName(countryName)
    ).toEqual(
      countryResult
    );
  });
  it('Test get country from country code', () => {
    const countryCode = 'it';
    const countryResult = {
      countryCode: 'IT',
      name: 'Italy'
    };
    expect(
      EasyCountriesList.filterByCountryCode(countryCode)
    ).toEqual(
      countryResult
    );
  });
});
