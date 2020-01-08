const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .option({
        a: {
            demand: true,
            alias: 'address',
            describe: "Address that the weather will be search for"
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var addressEncoded = encodeURIComponent(argv.address);
var geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${addressEncoded}.json?access_token=pk.eyJ1Ijoic2FtbGFrIiwiYSI6ImNrNHpob283cDAyeWgzcG1rejVqYmExNjIifQ._U-uYjPyBCBEjAEj3tJxYg`;

axios.get(geocodeUrl).then((response) => {
    if(!response.data.features.length){
        throw new Error("Sorry, I can\'t find the address");
    }
    var latitude = response.data.features[0].center[1];
    var longitude = response.data.features[0].center[0];
    var weatherUrl = `https://api.darksky.net/forecast/c907974dab1d05cce3adedefc8d7d164/${latitude},${longitude}`;
    console.log(response.data.features[0].place_name);
    return axios.get(weatherUrl);
}).then((response) => {
    var temperature = response.data.currently.temperature;
    var summary = response.data.currently.summary;
    console.log(`It\'s currently ${temperature} and it looks ${summary}`);
}).catch((error) => {
    if(error.code === 'ENOTFOUND'){
        console.log("Unable to connect to the server");
    }else{
        console.log(error.message);
    }
});