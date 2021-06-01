const express = require('express')

const router = express.Router();

const userCtr= require('../controllers/user.controller')

router.get('/', userCtr.readAllUsers);
router.get('/:id', userCtr.readUsers);
router.post('/add', userCtr.createUser);
router.put('/update/:id', userCtr.updateUsers);
router.delete('/delete/:id', userCtr.delUsers);

module.exports= router