const { default: Axios } = require("axios");
const express = require("express");
const app = express();
const port = process.env.PORT || 3030;
const axios = require('axios')
axios.defaults.baseURL = 'https://api-voice.herokuapp.com/api/'
// axios.defaults.baseURL = 'http://192.168.1.4:8000/api/'

const server = app.listen(`${port}`, () => {
    console.log(`Server started on port ${port}`);
});

const io = require("socket.io")(server, {
    cors: { origin: '*' }
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('publish_high_temperature', (person) => {
        console.log(person);
    });


    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});


