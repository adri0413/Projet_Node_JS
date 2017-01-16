var path = require('path');
var rootPath = path.normalize(__dirname + '/../'); 
module.exports = {
    development: {
        rootPath: rootPath
        , database: '192.168.99.100:27017'
        , port: process.env.PORT || 3000
    }
}