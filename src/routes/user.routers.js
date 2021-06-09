const express = require('express')

const router = express.Router();

const userCtr= require('../controllers/user.controller')


const { checkToken } = require('../auth/token_validation');
router.get('/', checkToken, userCtr.readAllUser);
router.get('/:id', checkToken, userCtr.readUser);
router.delete('/:id', userCtr.delUser);
router.post('/', userCtr.createUser);
router.put('/:id', userCtr.updateUser);


module.exports= router