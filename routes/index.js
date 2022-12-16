const express = require('express');
const customerRouter = require('./user.router')
const policyRouter = require('./policy.router')
const authRouter = require('./auth.router')


function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', customerRouter);
  router.use('/policy', policyRouter);
  router.use('/auth', authRouter);
}

module.exports = routerApi;
