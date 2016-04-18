# Easy Countries List [![npm version](https://badge.fury.io/js/easy-countries-list.svg)](https://badge.fury.io/js/easy-countries-list) [![Build Status](https://travis-ci.org/iMasterAle/easy-countries-list.svg?branch=master)](https://travis-ci.org/iMasterAle/easy-countries-list)

This package is a easy standar countries list.

__Salesforce__ and __Zuora__ used this countries list.

## Installation

`npm i --save easy-countries-list`

## Usage

### Function:

- #### Get all countries:

```js
import EasyCountriesList from 'easy-countries-list';

const countries = EasyCountriesList.getAllCountries();
```
_Return object:_
```js
[
  {...},
  {
    name: 'United States',
    countryCode: 'US' // ISO alpha-2
  },
  {...}
]
```

- #### Filter by Country Name:

```js
import EasyCountriesList from 'easy-countries-list';

const countries = EasyCountriesList.filterByCountryName('united states');
```
_Return object:_
```js
{
  name: 'United States',
  countryCode: 'US', // ISO alpha-2
  countryCodeThree: 'USA' // ISO alpha-3
}
```

- #### Filter by Country Code:

```js
import EasyCountriesList from 'easy-countries-list';

const countries = EasyCountriesList.filterByCountryCode('Us');
```
_Return object:_
```js
{
  name: 'United States',
  countryCode: 'US', // ISO alpha-2
  countryCodeThree: 'USA' // ISO alpha-3
}
```

- #### Filter by Country Code Three:

```js
import EasyCountriesList from 'easy-countries-list';

const countries = EasyCountriesList.filterByCountryCodeThree('Usa');
```
_Return object:_
```js
{
  name: 'United States',
  countryCode: 'US', // ISO alpha-2
  countryCodeThree: 'USA' // ISO alpha-3
}
```

## Next Feature

- Add states list for US and Canada.
