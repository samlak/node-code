const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage);
    } else {
        console.log(results.address);
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
            if(errorMessage){
                console.log(errorMessage);
            } else {
                console.log(`It\'s currently ${weatherResults.temperature} and it looks ${weatherResults.summary}`);
            }
        });
    }
});
