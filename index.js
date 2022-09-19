const express = require("express");
const morgan = require("morgan");

const functions = require("./functions");

const app = express();

app.use(morgan('dev'));

app.listen(3000);

app.get('/weather/:lat/:lon', async (req, resp) => {
    const lat = req.params.lat;
    const lon = req.params.lon;

    const result = await functions.getWeatherJSON(lat, lon);
    if (result.cod) {
        resp.status(parseInt(result.cod)).send(result.message);
        return;
    }
    resp.send(`La temperatura en ${result.city} es de ${result.temp} C. ${result.message}`);
});


app.get('/weather/RioCuarto', async (req, resp) => {
    const lat = -33.124656;
    const lon = -64.3518;
    const result = await functions.getWeatherJSON(lat, lon);
    resp.send(`La temperatura en ${result.city} es de ${result.temp} C. ${result.message}`);
});