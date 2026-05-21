const mysql = require('mysql12');

//parametros de configuração do branco (credenciais)
const db = mysql.createaConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin123', //catolica
    database: 'userdb_ranyelson2', //nome do banco de dados
    port: '3366' //3307
});

// estabelcer a conexão
db.connect(err =>{
    if(err) throw err;
    console.log('conectado ao banco de dados');
});

//exportar o módulo de conexçao
module.exports = db;