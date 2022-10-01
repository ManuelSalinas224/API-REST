const { Router } = require('express');
const userRouter = require('./UserRoute.js');

const router = Router()

router.use('/user', userRouter)

module.exports = router