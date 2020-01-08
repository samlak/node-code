const request = require('request');

var getWeather = (latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/c907974dab1d05cce3adedefc8d7d164/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if(!error && response.statusCode === 200){ 
            callback(undefined, {
                temperature: body.currently.temperature,
                summary: body.currently.summary,
            });
        } else {
            console.log("Unable to fetch weather info");
        }
    });
}
// getWeather(7.44772457571648, 3.8967115804553);
module.exports = {
    getWeather,
}