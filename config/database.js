var mongoose = require('mongoose');
module.exports = function (envConfig) {
    
    require('./models/Todo');
    
    mongoose.connect(envConfig.database, function () {
        console.log('connecter à la console')
    });
};