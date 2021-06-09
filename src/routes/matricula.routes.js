const express = require('express')

const router = express.Router();

const  matriculaCtr= require('../controllers/matricula.controller')

router.get('/', matriculaCtr.readAllMatricula);
router.get('/:id',  matriculaCtr.readMatricula);
router.post('/add',  matriculaCtr.createMatricula);
router.put('/update/:id',  matriculaCtr.updateMatricula);
router.delete('/delete/:id',  matriculaCtr.delMatricula);

module.exports= router