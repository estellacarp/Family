module.exports = {
    create: function () {
        console.log('here too');
        return Request.get('/test');
    }
}