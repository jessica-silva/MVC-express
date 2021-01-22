//criando uma rota para about.ejs em view
const express = require('express');

const router = express.Router();

router.get('/', function(req, res){
    res.render('about');
});

module.exports = router;