const dbConn  = require('./db.js');

var Product = function(product){
    this.productid     =   product.productid;
    this.productName      =   product.productName;
    this.productPrice     =   product.productPrice;
    this.created_at     =   new Date();
    this.updated_at     =   new Date();
    this.image = product.image;
}

// get all products
Product.getAllProducts = (result) =>{
    dbConn.query('SELECT * FROM products', (err, res)=>{
        if(err){
            console.log('Error while fetching employess', err);
            result(null,err);
        }else{
            console.log('Products fetched successfully');
            result(null,res);
        }
    })
}

// get product by ID from DB
Product.getProductByID = (id, result)=>{
    dbConn.query('SELECT * FROM products WHERE productid=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching product by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new product
Product.createProduct = (productReqData, result) =>{
    dbConn.query('INSERT INTO products SET ? ', productReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('Product created successfully');
            result(null, res)
        }
    })
}

// update product
Product.updateProduct = (id, productReqData, result)=>{
    dbConn.query("UPDATE products SET productName=?,productPrice=?,created_at=?,updated_at=? WHERE productid = ?", [productReqData.productName,productReqData.productPrice,productReqData.created_at,productReqData.updated_at, id], (err, res)=>{
        if(err){
            console.log('Error while updating the product');
            result(null, err);
        }else{
            console.log("Product updated successfully");
            result(null, res);
        }
    });
}

// delete product
Product.deleteProduct = (id, result)=>{
    dbConn.query('DELETE FROM products WHERE productid=?', [id], (err, res)=>{
        if(err){
            console.log('Error while deleting the product');
            result(null, err);
        }else{
            result(null, res);
        }
    })
    // dbConn.query("UPDATE products SET is_deleted=? WHERE id = ?", [1, id], (err, res)=>{
    //     if(err){
    //         console.log('Error while deleting the product');
    //         result(null, err);
    //     }else{
    //         console.log("Product deleted successfully");
    //         result(null, res);
    //     }
    // });
}

module.exports = Product;