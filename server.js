var express = require('express');
var app = express();

var env = process.env.NODE_ENV || 'development';
var envConfig = require('./config/env')[env];

require('./config/config')(app, envConfig);

require('./config/database')(envConfig)
    
require('./config/routes')(app);

app.listen(envConfig.port, function () {});