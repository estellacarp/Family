const Request = require('./requestHandler.js')

module.exports = {
    create: function (params) {
        console.log('here too');
        console.log(params)
        return Request.post('/register', params);
    }
}