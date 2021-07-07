# country-iso-3-to-2

> Convert a country code ISO 3166-1 Alpha-3 to/from ISO 3166-1 Alpha-2

## Install

```sh
$ npm install rcabralyu/country-iso-3-to-2
```

## Usage

```js
const getISO2 = require("country-iso-3-to-2").getISO2;
const getISO3 = require("country-iso-3-to-2").getISO3;

getISO2("BRA")
// "BR"

getISO2("USA")
// "US"

getISO3("BR")
// "BRA"

getISO3("US")
// "USA"
``` 
