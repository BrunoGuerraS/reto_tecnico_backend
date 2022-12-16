const express = require('express')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const config = require('../config/config')
const router = express.Router()


router.post('/login',
    passport.authenticate('local', {session: false}),
    async ( req, res, next ) => {
        try {
            console.log('ingrese al login post')
            const user = req.user
            console.log('user=> ' , user)
            const payload = {
                sub: user.id,
                role: user.role
            }
            const token = jwt.sign(payload, config.jwtSecret)

            res.status(201).json({user, token})
        } catch (error) {
            console.error(error)
            next(error)
        }
})


module.exports = router
