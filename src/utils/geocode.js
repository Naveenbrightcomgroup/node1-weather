const request = require('request')
const geocode = (address, callback) => {
    const url = 'https://geocoding-api.open-meteo.com/v1/search?name=Berlin&count=' + address + '&language=en&format=json'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Unable to connect Geocode!", undefined)
        } else if (body.error) {
            callback('Unable to Find location!', undefined)
        } else {
            callback(undefined, {
                latitude: body.results[1].latitude,
                longitude: body.results[1].longitude
            })
        }
    })
}
module.exports = geocode