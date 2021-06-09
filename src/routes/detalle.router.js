const express = require('express')

const router = express.Router();

const detalleCtr= require('../controllers/detalle.controller')

router.get('/', detalleCtr.readAllDetalle);
router.get('/:id', detalleCtr.readDetalle);
router.post('/add', detalleCtr.createDetalle);
router.put('/update/:id', detalleCtr.updateDetalle);
router.delete('/delete/:id', detalleCtr.delDetalle);

module.exports= router