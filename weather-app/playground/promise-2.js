const request = require('request');
var getcodeAddress = (address) => {
    return new Promise ((resolve, reject) => {
        var addressEncoded = encodeURIComponent(address)
        request({
            url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${addressEncoded}.json?access_token=pk.eyJ1Ijoic2FtbGFrIiwiYSI6ImNrNHpob283cDAyeWgzcG1rejVqYmExNjIifQ._U-uYjPyBCBEjAEj3tJxYg`,
            json: true
        }, (error, response, body) => {
            if(error || body.message === "Not Found"){
                reject("I can\'t handle the server connecetion");
            } else if (!body.features.length) {
                reject("Sorry, I can\'t find the address");
            } else if (body.features.length) {
                resolve({
                    address: body.features[0].place_name,
                    latitude: body.features[0].center[1],
                    longitude: body.features[0].center[0],
                });
            }
        });
    });
}
getcodeAddress('University of Ibadan').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});