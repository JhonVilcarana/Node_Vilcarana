const Pool = require('pg').Pool

const database={}

database.pool = new Pool({
    host:'ec2-34-193-112-164.compute-1.amazonaws.com',
    user: 'xqqtuhicimiwet',
    password: '7481fd0eb0910e8f4d865e801f60bb7357db62e6ffbdf19095119c09864547d3',
    database:'d41btnsnd2aa5g',
    port: 5432,
    ssl: { rejectUnauthorized: false }
})


module.exports=database