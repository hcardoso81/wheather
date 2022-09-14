const express = require("express");
const morgan = require("morgan");

const functions = require("./functions");

const app = express();

app.use(morgan('dev'));

app.listen(3000);

app.get('/weather/:lat/:lon', async (req, resp) => {
    const lat = functions.isFloat(req.params.lat);
    const lon = functions.isFloat(req.params.lon);
    if (!lat || !lon) {
        resp.status(500).send('Params Incorrect');
        return;
    }
    const result = await functions.getWeatherJSON();
    resp.send("obtener servicio clima " + result);
});


app.get('/weather/RioCuarto', (req, resp) => {
    resp.send("obtener servicio clima Rio Cuarto");

});