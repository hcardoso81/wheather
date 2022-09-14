
const axios = require('axios').default;

function isFloat(str) {
    let pattern = /^-?\d*(\.\d+)?$/;
    if (!str.match(pattern)) return false;
    let val = parseFloat(str);
    const isInteger = Number.isInteger(val);
    return isInteger ? false : true;
}

async function getWeatherJSON() {

    try {
        const result = await axios
            .get(`https://api.openweathermap.org/data/2.5/weather`, {
                params: {
                    lat: -33.124656,
                    lon: -64.3518,
                    appid: "f0d85b6bc88d924cbc1a2efa1f3545b5"
                }
            });
        return result.data.name;
    }

    catch (e) {
        console.log(e);
    }
}
module.exports = { isFloat, getWeatherJSON }