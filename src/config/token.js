const jwt = require('jsonwebtoken');
const authConfig = require('./auth.json')

module.exports = {
    generateToken(params ={}){

        return jwt.sign(params, authConfig.secret, {
            expiresIn: 86400,
        });

    }
}