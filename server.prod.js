const path = require('path')
const express = require('express')

module.exports = {
    app: function () {
        const app = express();
        const publicPath = express.static(path.join(__dirname, 'public'));
        app.use(publicPath);
        app.get('*', function (request, response){
            response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
        });
        return app
    }
}