'use strict'

module.exports = function (app){
    let myResponse = require('./controller');

    //handling product
    app.route('/')
        .get(myResponse.index);
    app.route('/api/v1/products')
        .get(myResponse.getAllProduct);
    app.route('/api/v1/product')
        .post(myResponse.addProduct);
    app.route('/api/v1/product/:id')
        .put(myResponse.editProduct);
    app.route('/api/v1/product')
        .delete(myResponse.deleteProduct);

    //handling category
    app.route('/api/v1/categories')
        .get(myResponse.getAllCategories);
    app.route('/api/v1/category')
        .post(myResponse.addCategory);
    app.route('/api/v1/category/:id')
        .put(myResponse.editCategory);
    app.route('/api/v1/category')
        .delete(myResponse.deleteCategory);
}