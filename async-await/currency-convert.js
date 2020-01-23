const axios = require('axios');

// const getExchangeRate = (from, to) => {
//     return axios.get('http://data.fixer.io/api/latest?access_key=fde8e060c27b3c0f487c5e2e18146372').then((response) => {
//         const euro = 1 / response.data.rates[from];
//         const rate = euro * response.data.rates[to];
//         return rate;
//     });
// };

const getExchangeRate = async (from, to) => {
    try{
        const response = await axios.get('http://data.fixer.io/api/latest?access_key=fde8e060c27b3c0f487c5e2e18146372');
        const euro = 1 / response.data.rates[from];
        const rate = euro * response.data.rates[to];
        
        if(isNaN(rate)){
            throw new Error();
        }
        return rate;
    } catch (e) {
        throw new Error(`Unable to get exchange rate for ${from} to ${to}`);
    }
};

// const getCountries = () => {
//     return axios.get('https://restcountries.eu/rest/v2/currency/usd').then((response) => {
//         return response;
//     });
// };

getExchangeRate('CAD', 'NGN').then((rate) => {
    console.log(rate);
}).catch((e) => {
    console.log(e.message);
});

// getCountries().then((rate) => {
//     console.log(rate);
// });