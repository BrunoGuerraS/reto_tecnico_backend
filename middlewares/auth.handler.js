const boom = require('@hapi/boom')
const  config  = require('../config/config')

function checkApiKey(req, res, next){
    const apiKey = req.headers['api']
    console.log(config)
    if (apiKey === config.apiKey){
        next()
    } else {
        next(boom.unauthorized())
    }
}

function checkRoles(...roles){
    return (req, res, next) => {
        const user = req.user
        console.log(user)
        console.log(roles)
        console.log(roles.includes(user.role))
        if (roles.includes(user.role)) {
            next()
        } else {
            next(boom.unauthorized())
        }
    }
}



module.exports = { checkApiKey, checkRoles }
