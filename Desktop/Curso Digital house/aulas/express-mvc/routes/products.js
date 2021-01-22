var express = require('express');
const model = require('../model/products')

var router = express.Router();

router.get("/", function(req, res, next){
    res.render('products', { title: 'produtos', products: model.getProducts() });
});

module.exports = router;