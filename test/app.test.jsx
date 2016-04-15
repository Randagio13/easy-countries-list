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
      EasyCountriesList.getFilterCountryName(countryName)
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
      EasyCountriesList.getFilterCountryCode(countryCode)
    ).toEqual(
      countryResult
    );
  });
  it('Test get country from country code three', () => {
    const countryCodeThree = 'ita';
    const countryResult = {
      countryCode: 'IT',
      name: 'Italy',
      countryCodeThree: 'ITA'
    };
    expect(
      EasyCountriesList.getFilterCountryCodeThree(countryCodeThree)
    ).toEqual(
      countryResult
    );
  });
});
