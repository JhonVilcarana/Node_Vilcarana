const express =require('express') 
const morgan = require('morgan') 
const userRoutes = require('./routes/user.routes') 

const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.get('/', function(req, res, next){
    res.send('Bienvenido a Node JS...!');
});
app.use('/api/auth/users', userRoutes);

module.exports = app;