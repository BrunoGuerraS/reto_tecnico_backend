const express = require('express')
const passport = require('passport')
const router = express.Router()
const UserService = require('../services/user.service')
const service = new UserService()
const { checkApiKey } = require('../middlewares/auth.handler')
const { checkRoles } = require('../middlewares/auth.handler')


router.get('/',
    passport.authenticate('jwt', {session: false}),
    checkRoles('admin'),
    async ( req, res, next ) => {
    try {
        const user = await service.find()
        res.status(201).json(user)
    } catch (error) {
        res.json(error)
    }
})

router.get('/:id', async ( req, res, next ) => {
    const { id } = req.params
    try {
        const customer = await service.findOne(id)
        res.status(201).json(customer)
    } catch (error) {
        res.json(error)
    }
})

router.post('/', async ( req, res, next ) => {
    const body = req.body
    try {
        const createCustomer = await service.create(body)
        res.status(201).json(createCustomer)
    } catch (error) {
        res.json(error)
    }
})

router.patch('/:id', async ( req, res, next ) => {
    const { id } = req.params
    const body = req.body
    try {
        const udpateCustomer = await service.upDate(id, body)
        res.status(201).json(udpateCustomer)
    } catch (error) {
        res.json(error)
    }
})

router.delete('/:id', async ( req, res, next ) => {
    const { id } = req.params
    try {
        const deleteCustomer = await service.delete(id)
        res.status(201).json(deleteCustomer)
    } catch (error) {
        res.json(error)
    }
})

module.exports = router
