const express = require("express")
const request = require("request");
const dotenv = require("dotenv").config();
const app = express();

const PORT = 3000;

const argument = process.argv[2];

const options = {
    url: `https://api.openweathermap.org/data/2.5/weather?q=${argument}&units=metric&appid=${process.env.API_KEY}`,
    method: "GET",
    json: true,
};

request(options, (error, res, body) => {
    console.log(`現在の${argument}の天気は${body.weather[0].main}です．`);
    console.log(`現在の${argument}の気温は${body.main.temp}度です．`);
});

app.listen(PORT);