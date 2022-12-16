const express = require('express')
const passport = require('passport')
const router = express.Router()
const PolicyService = require('../services/policy.service')
const service = new PolicyService()

router.get('/', async ( req, res, next ) => {
    try {
        const policy = await service.find()
        res.status(201).json(policy)
    } catch (error) {
        res.json(error)
    }
})

router.get('/:id', async ( req, res, next ) => {
    const { id } = req.params
    try {
        const newPolicy = await service.findOne(id)
        res.status(201).json(newPolicy)
    } catch (error) {
        res.json(error)
    }
})

router.post('/',
    passport.authenticate('jwt', {session: false}),
    async ( req, res, next ) => {
        const body = req.body
        try {
            const createPolicy = await service.create(body)
            res.status(201).json(createPolicy)
        } catch (error) {
            res.json(error)
        }
})

router.patch('/:id', async ( req, res, next ) => {
    const { id } = req.params
    const body = req.body
    try {
        const udpatePolicy = await service.upDate(id, body)
        res.status(201).json(udpatePolicy)
    } catch (error) {
        res.json(error)
    }
})

router.delete('/:id', async ( req, res, next ) => {
    const { id } = req.params
    try {
        const deletePolicy = await service.delete(id)
        res.status(201).json(deletePolicy)
    } catch (error) {
        res.json(error)
    }
})

module.exports = router
