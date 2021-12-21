'use strict'

var response = require('./res');
var connection = require('./connection');


exports.index = function(req,res){
    response.ok("App is running successfuly", res);
}

//showing all products
exports.getAllProduct = function(req,res){
    let ownedBy = req.headers.currentUser

    connection.query(`SELECT 
                    products.name AS nama,
                    net_price AS harga,
                    cloth_name AS nama_kain,
                    color_kind AS jenis_warna,
                    color_type AS tipe_warna,
                    composition AS komposisi,
                    width AS lebar,
                    gramation AS gramasi,
                    shape AS bentuk,
                    cloth_type AS tipe_kain,
                    processing AS pemrosesan,
                    characteristic AS karakteristik,
                    spandex AS spandex,
                    performance AS performa,
                    cloth_function AS fungsi_kain,
                    image_url AS gambar,
                    categories.category_name AS kategori
                    FROM products JOIN categories ON products.category_id = categories.id;`,function(error,val,fields){
        if(error){
            throw error;
        }else{
            res.status(200);
            response.ok(val, res)
        }
    })
}

//add new product
exports.addProduct = function(req,res){
        let name           =req.body.nama;
        let net_price      = req.body.harga;
        let cloth_name     = req.body.nama_kain;
        let color_kind     = req.body.jenis_warna;
        let color_type     = req.body.tipe_warna;
        let composition    = req.body.komposisi;
        let width          = req.body.lebar;
        let gramation      = req.body.gramasi;
        let shape          = req.body.bentuk;
        let cloth_type     = req.body.tipe_kain;
        let processing     = req.body.pemrosesan;
        let characteristic = req.body.karakteristik;
        let spandex        = req.body.spandex;
        let performance    = req.body.performa;
        let cloth_function = req.body.fungsi_kain;
        let category_id    = 2;
        let image_url      = req.file.filename;

    

    connection.query(`INSERT INTO products 
                        (name,
                            net_price,
                            cloth_name,
                            color_kind,
                            color_type,
                            composition	,
                            width,
                            gramation,
                            shape,
                            cloth_type,
                            processing	,
                            characteristic,
                            spandex,
                            performance,
                            cloth_function,
                            category_id,
                            image_url)
                        VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,[
                            name,        
                            net_price,    
                            cloth_name,     
                            color_kind,    
                            color_type,    
                            composition,    
                            width,         
                            gramation,     
                            shape,          
                            cloth_type,    
                            processing,  
                            characteristic,
                            spandex,    
                            performance,   
                            cloth_function, 
                            category_id,
                            image_url,
                        ],
                        function(error,val,fields){
                            if(error){
                                throw error;
                            }else{
                                res.status(201);
                                response.created({"result":"Berhasil menambahkan data!"}, res);
                            }
                        })
}

//edit product
exports.editProduct = function(req,res){
    let id             = req.params.id;
    let name           =req.body.nama;
    let net_price      = req.body.harga;
    let cloth_name     = req.body.nama_kain;
    let color_kind     = req.body.jenis_warna;
    let color_type     = req.body.tipe_warna;
    let composition    = req.body.komposisi;
    let width          = req.body.lebar;
    let gramation      = req.body.gramasi;
    let shape          = req.body.bentuk;
    let cloth_type     = req.body.tipe_kain;
    let processing     = req.body.pemrosesan;
    let characteristic = req.body.karakteristik;
    let spandex        = req.body.spandex;
    let performance    = req.body.performa;
    let cloth_function = req.body.fungsi_kain;
    let category_id    = req.body.kategori;
    let updated_at           = new Date();

connection.query(`UPDATE products 
                    SET name=?,
                        net_price=?,
                        cloth_name=?,
                        color_kind=?,
                        color_type=?,
                        composition=?	,
                        width=?,
                        gramation=?,
                        shape=?,
                        cloth_type=?,
                        processing=?	,
                        characteristic=?,
                        spandex=?,
                        performance=?,
                        cloth_function=?,
                        category_id=?,
                        updated_at=? WHERE id=?`,[
                        name,        
                        net_price,    
                        cloth_name,     
                        color_kind,    
                        color_type,    
                        composition,    
                        width,         
                        gramation,     
                        shape,          
                        cloth_type,    
                        processing,  
                        characteristic,
                        spandex,    
                        performance,   
                        cloth_function, 
                        category_id,
                        updated_at,
                        id,
                    ],
                    function(error,val,fields){
                        if(error){
                            throw error;
                        }else{
                            res.status(200);
                            response.ok({"result":"Berhasil mengubah data!"}, res);
                        }
                    })
}

//delete product
exports.deleteProduct = function (req, res) {
    var id = req.body.id;

    if (!id){
        response.validation("Masukan id product!", res)
    }else{
        connection.query('DELETE FROM products WHERE id=?',[id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil hapus data!", res);
            }
        });
    }
}


//showing all categories
exports.getAllCategories = function(req,res){
    let ownedBy = req.headers.currentUser

    connection.query(`SELECT category_name AS kategori FROM categories`,function(error,val,fields){
        if(error){
            throw error;
        }else{
            res.status(200);
            response.ok(val, res)
        }
    })
}

//add new category
exports.addCategory = function(req,res){
    let category_name    =req.body.nama_kategori;



connection.query(`INSERT INTO categories (category_name)VALUES (?)`,[category_name],
                    function(error,val,fields){
                        if(error){
                            throw error;
                        }else{
                            res.status(201);
                            response.created({"result":"Berhasil menambahkan ketgori!"}, res);
                        }
                    })
}

//update category
exports.editCategory = function(req,res){

    let id               = req.params.id;
    let category_name    = req.body.nama_kategori;
    let updated_at       = new Date();

    connection.query(`UPDATE categories SET category_name=?,updated_at=? WHERE id=?`,[category_name,updated_at, id],
                    function(error,val,fields){
                        if(error){
                            throw error;
                        }else{
                            res.status(201);
                            response.created({"result":"Berhasil mengubah kategori!"}, res);
                        }
                    })
}

//delete category
exports.deleteCategory = function (req, res) {
    var id = req.body.id;

    if (!id){
        response.validation("Masukan id kategori!", res)
    }else{
        connection.query('DELETE FROM categories WHERE id=?',[id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil menghapus kategori!", res);
            }
        });
    }
}