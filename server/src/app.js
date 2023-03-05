const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const planetsRouter = require('./routes/planets/planets.router');
const launchesRouter = require('./routes/launches/launches.router');

/**
 * App Setting
 */
const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
}));

/**
 * Server Logging Configuration
 */
app.use(morgan('combined'));
/**
 * Server Static Files Configuration
 */
app.use(express.static(path.join(__dirname, '..', 'public')));
/**
 * App Router Setting
 */
app.use('/planets', planetsRouter);
app.use('/launches', launchesRouter);
app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})

module.exports = app;