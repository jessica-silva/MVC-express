const productsData = require('../products.json');

function getProducts(){
    return productsData
}
//abaixo outros arquivos usam tudo que está aqui
module.exports = {
    getProducts: getProducts,
}