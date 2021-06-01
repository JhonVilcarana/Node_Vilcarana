const pool = require('../database').pool
const userCtr = {}
userCtr.readAllUsers = async (req, res) => {
    try {
        const response = await pool.query('select * from producto');
        return res.status(200).json(response.rows)
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal server error...!')
    }
}
userCtr.readUsers = async (req, res) => {
    try {
        const response = await pool.query('select * from producto where idproducto=$1', [req.params.id]);
        return res.status(200).json(response.rows)
    } catch (e) {
        console.log(e)
        res.status(500).json('Internal server error...!');
    }
}

userCtr.createUser = async (req, res) => {
    try {
        const { idproducto, nombre, precio, stock } = req.body;
        await pool.query('insert into producto values ($1, $2, $3, $4)', [idproducto, nombre, precio, stock]);
        return res.status(200).json(`Producto creado correctamente`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal server error...!')
    }
}
userCtr.updateUsers = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { nombre, precio, stock } = req.body;
        await pool.query('update producto set nombre=$1, precio=$2, stock=$3 where idproducto=$4', [nombre, precio, stock, id]);
        return res.status(200).json(`Producto ${id} modificado correctamente`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal server error...!')
    }
}
userCtr.delUsers = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from producto where idproducto=$1', [id]);
        return res.status(200).json(`Producto ${id} eliminado correctamente`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal server error...!')
    }
}

module.exports = userCtr