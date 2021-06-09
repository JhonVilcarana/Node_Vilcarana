const pool = require('../database').pool
const matriculaCtr = {}
matriculaCtr.readAllMatricula = async (req, res) => {
    try {
        const response = await pool.query('select * from matricula');
        return res.status(200).json(response.rows)
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal server error...!')
    }
}
matriculaCtr.readMatricula = async (req, res) => {
    try {
        const response = await pool.query('select * from matricula where idmatricula=$1', [req.params.id]);
        return res.status(200).json(response.rows)
    } catch (e) {
        console.log(e)
        res.status(500).json('Internal server error...!');
    }
}

matriculaCtr.createMatricula = async (req, res) => {
    try {
        const { idproducto, nombre, precio, stock } = req.body;
        await pool.query('insert into matricula values ($1, $2, $3, $4, $5, #6, #7)', [idmatricula, fecha, ciclo, idusuario, idempleado, idescuela, idalumno]);
        return res.status(200).json(`Matricula creada correctamente`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal server error...!')
    }
}
matriculaCtr.updateMatricula = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { nombre, precio, stock } = req.body;
        await pool.query('update matricula set fecha=$1, ciclo=$2, idusuario=$3, idempleado=$4, idescuela=$5, idalumno=$6 where idmatricula=$7', [fecha. ciclo,idusuario, idempleado, idescuela, idalumno, id]);
        return res.status(200).json(`Producto ${id} modificado correctamente`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal server error...!')
    }
}
matriculaCtr.delMatricula = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from matricula where idmatricula=$1', [id]);
        return res.status(200).json(`Matricula ${id} eliminado correctamente`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal server error...!')
    }
}

module.exports = matriculaCtr