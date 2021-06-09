const pool = require('../database').pool
const detalleCtr = {}
detalleCtr.readAllDetalle = async (req, res) => {
    try {
        const response = await pool.query('select * from detalle');
        return res.status(200).json(response.rows)
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal server error...!')
    }
}
detalleCtr.readDetalle = async (req, res) => {
    try {
        const response = await pool.query('select * from detalle where iddetalle=$1', [req.params.id]);
        return res.status(200).json(response.rows)
    } catch (e) {
        console.log(e)
        res.status(500).json('Internal server error...!');
    }
}

detalleCtr.createDetalle = async (req, res) => {
    try {
        const { iddetalle, creditos, hora, horas, idcurso, idmatricula } = req.body;
        await pool.query('insert into detalle values ($1, $2, $3, $4, $5)', [iddetalle, creditos, hora, horas, idcurso, idmatricula]);
        return res.status(200).json(`Detalle creado correctamente`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal server error...!')
    }
}
detalleCtr.updateDetalle = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { nombre, precio, stock } = req.body;
        await pool.query('update detalle set creditos=$1, horas=$2, idcurso=$3, idmatricula=$4 where iddetalle=$5', [creditos, horas, idcurso, idmatricula, id]);
        return res.status(200).json(`Detalle ${id} modificado correctamente`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal server error...!')
    }
}
detalleCtr.delDetalle = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from detalle where id=$1', [id]);
        return res.status(200).json(`Detalle ${id} eliminado correctamente`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal server error...!')
    }
}

module.exports = detalleCtr