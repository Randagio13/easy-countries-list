# Easy Countries List

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
  countryCode: 'US' // ISO alpha-2
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
  countryCode: 'US' // ISO alpha-2
}
```

## Next Feature

- Add ISO alpha-3 code.
