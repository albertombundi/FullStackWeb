const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const twilio = require('twilio');
const socketio = require('socket.io');


// Initialize the Express app
const app = express();

// Template engine setup
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);


// Public folder setup
app.use(express.static(__dirname + 'public'));

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define a port
const port = 300;

// Start server
const server = app.listen(port, () => console.log(`Server started on port ${port}`))