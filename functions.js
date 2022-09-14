
const axios = require('axios').default;
const dotenv = require('dotenv');
dotenv.config();


function isFloat(str) {
    let pattern = /^-?\d*(\.\d+)?$/;
    if (!str.match(pattern)) return false;
    let val = parseFloat(str);
    const isInteger = Number.isInteger(val);
    return isInteger ? false : true;
}

async function getWeatherJSON(lat, lon) {
    try {
        const result = await axios
            .get(`https://api.openweathermap.org/data/2.5/weather`, {
                params: {
                    lat: lat,
                    lon: lon,
                    appid: process.env.API_KEY,
                    units: "metric"
                }
            });

        const data = {
            city: result.data.name,
            temp: result.data.main.temp,
            message: (result.data.main.temp > 15) ? "Por lo tanto es mayor a 15 C" : "Claramente menor a 15 C"
        }
        return data;
    }

    catch (e) {
        return e.response.data;

    }
}
module.exports = { isFloat, getWeatherJSON }