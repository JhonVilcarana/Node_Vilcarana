
const express = require('express')

const router = express.Router();



const authCtr= require('../controllers/auth.controller')
router.post('/', authCtr.login);
router.post('/auth', authCtr.signIn)

module.exports= router