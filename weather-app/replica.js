const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
            .option({
                a: {
                    demand: true,
                    describe: "Address to search for",
                    alias: "address"
                }
            })
            .help()
            .alias('help', 'h')
            .argv;
var addressEncoded = encodeURIComponent(argv.address);            
var geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${addressEncoded}.json?access_token=pk.eyJ1Ijoic2FtbGFrIiwiYSI6ImNrNHpob283cDAyeWgzcG1rejVqYmExNjIifQ._U-uYjPyBCBEjAEj3tJxYg`;
axios(geocodeUrl).then((response) => {
    if(!response.data.features.length){
        throw new Error("This is problem fetching the address info");
    }
    console.log(response.data.features[0].place_name);
    var latitude = response.data.features[0].center[1];
    var longitude = response.data.features[0].center[0];
    var weatherUrl = `https://api.darksky.net/forecast/c907974dab1d05cce3adedefc8d7d164/${latitude},${longitude}`;
    return axios(weatherUrl);
}).then((weatherResponse) => {
    // if(weatherResponse.data.statusCode !== 200){
    //     throw new Error("This is problem fetching weather info");
    // }
    var summary = weatherResponse.data.currently.summary;
    var temperature = weatherResponse.data.currently.temperature;
    console.log(`The temperature is ${temperature} and the sky is ${summary}`);
}).catch((error) => {
    if(error.code === 'ENOTFOUND'){
        console.log("Unable to connect to the server");
    } else {
        console.log(error.message);
    }
})