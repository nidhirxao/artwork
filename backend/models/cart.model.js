const dbConn  = require('./db.js');

var Cart = function(cart){
    this.productid = cart.productid;
    this.productName = cart.productName;
    this.productImage = cart.productImage;
    this.productPrice = cart.productPrice;
    this.productQty = cart.productQty;
    this.created_at     =   new Date();
    this.updated_at     =   new Date();
}

// get all products
Cart.getAllCartItems = (result) =>{
    dbConn.query('SELECT * FROM cart', (err, res)=>{
        if(err){
            console.log('Error while fetching cart items', err);
            result(null,err);
        }else{
            console.log('Cart Items fetched successfully');
            result(null,res);
        }
    })
}

// get Cart by ID from DB
Cart.getCartItemByID = (id, result)=>{
    dbConn.query('SELECT * FROM cart WHERE productid=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching cart item by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new Cart
Cart.insertIntoCart = (productReqData, result) =>{
    dbConn.query('INSERT INTO cart SET ? ', productReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('Inserted into created successfully');
            result(null, res)
        }
    })
}

Cart.deleteAll = (result) =>{
    dbConn.query('TRUNCATE cart', (err, res)=>{
        if(err){
            console.log('Error while deleting data');
            result(null, err);
        }else{
            console.log('successfully');
            result(null, res)
        }
    })
}


// update Cart
Cart.updateCartItem = (id, cartReqData, result)=>{
    dbConn.query("UPDATE cart SET id=?,p_name=?,p_quantity=? WHERE productid = ?", [cartReqData.productId,cartReqData.cartproductName,cartReqData.cartProductQty, id], (err, res)=>{
        if(err){
            console.log('Error while updating the cart');
            result(null, err);
        }else{
            console.log("Cart updated successfully");
            result(null, res);
        }
    });
}

// delete Cart
Cart.deleteCartItem = (id, result)=>{
    console.log("ID Received",id)
    dbConn.query('DELETE FROM cart WHERE productid=?', [id], (err, res)=>{
        if(err){
            console.log('Error while deleting the Cart');
            result(null, err);
        }else{
            result(null, res);
        }
    })
    // dbConn.query("UPDATE cart SET is_deleted=? WHERE id = ?", [1, id], (err, res)=>{
    //     if(err){
    //         console.log('Error while deleting the cart item');
    //         result(null, err);
    //     }else{
    //         console.log("cart item deleted successfully");
    //         result(null, res);
    //     }
    // });
}

module.exports = Cart;