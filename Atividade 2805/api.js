const express = require('express'); //instancia do express

const router = express.Router(); //modulariza as rotas

const db = require('../db'); //conecta com os bancos de dados
const e = require('express');

//criar as rotas
//cadastar usuário
//POST --> INSERT
router.post('/', (req, res)=>( //caminho> /api/users/
    const (nome, email) = req.body;

    db.query('insert into ')
));

//editar usuário
//listar todos os usuários
//excluir o usuário

module.exports = router;