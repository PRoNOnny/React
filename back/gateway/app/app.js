const express = require('express');
const config = require('config');
const log4js = require("log4js");
const bodyParser = require('body-parser');

// import Config
const AppConfig = require('./config/AppConfig');
const ErrorMessageConfig = require('./config/ErrorMessageConfig');

const app = express()
const logger = log4js.getLogger();
const appCfgInstance = new AppConfig(config);
const errMsgCfgInstance = new ErrorMessageConfig(config);

const UserResource = require('./resources/UserResource');
const MovieResource = require('./resources/MovieResource')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(function (request, response, next) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,authorization,token,xtoken,ntoken,hid,fid,id,rtid,year,support,license,mode');
    response.setHeader('Access-Control-Allow-Credentials', true);
    next();
})

const userRes = new UserResource(errMsgCfgInstance);
const movieRes = new MovieResource(errMsgCfgInstance);

app.listen(appCfgInstance.appPort, appCfgInstance.appLocalHost, () => {
    logger.info(config.get('app') + ' application environment ' + config.get('environment') + ' startup at port ' + appCfgInstance.appPort);
    userRes.init(app);
    movieRes.init(app);
});

app.get('/', (req, res) => {
    res.send('Travalling For you');
});