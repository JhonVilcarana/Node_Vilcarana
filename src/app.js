const express =require('express') 
const morgan = require('morgan') 
const userRoutes = require('./routes/user.routers') 
const detalleRoutes = require('./routes/detalle.router') 
const matriculaRoutes = require('./routes/matricula.routes') 
const authRoutes = require('./routes/auth.routers') 
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.get('/', function(req, res, next){
    res.send('Bienvenido a Node JS...!');
});
app.use('/api/auth/users', userRoutes);
app.use('/api/auth/detalles', matriculaRoutes);
app.use('/api/auth/matriculas', detalleRoutes);
app.use('/api', authRoutes);
module.exports = app;