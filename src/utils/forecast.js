const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=' + latitude + '&longitude=' + longitude + '&hourly=temperature_2m'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Unable to connect forecast!", undefined)
        } else if (body.error) {
            callback("Unable to find location!", undefined)
        } else {
            callback(undefined,
                console.log("the hourly units " + body.hourly_units.time + " and temperture is " + body.hourly_units.temperature_2m)
            )
        }
    })
}
module.exports = forecast
