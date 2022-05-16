
const CartModel = require('../models/cart.model');

// get all product list
exports.getCartItemsList = (req, res)=> {
    //console.log('here all products list');
    CartModel.getAllCartItems((err, items) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Cart Items', items);
        res.send(items)
    })
}

// get product by ID
exports.getCartItemByID = (req, res)=>{
    //console.log('get emp by id');
    CartModel.getCartItemByID(req.params.id, (err, item)=>{
        if(err)
        res.send(err);
        console.log('single product data',item);
        res.send(item);
    })
}

// create new product
exports.insertNewItem = (req, res) =>{
    const cartReqData = new CartModel(req.body);
    console.log('cartReqData', cartReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        CartModel.insertIntoCart(cartReqData, (err, cart)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Item inserted Successfully', data: cart })
        })
    }
}

// update product
exports.updateCartItem = (req, res)=>{
    const cartReqData = new CartModel(req.body);
    console.log('productReqData update', cartReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        CartModel.updateCartItem(req.params.id, cartReqData, (err, cart)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Item updated Successfully'})
        })
    }
}

exports.deleteAllItems = (req, res)=>{
    CartModel.deleteAll((err, cartitem)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'Product deleted successully!'});
    })
}
// delete product
exports.deleteCartItem = (req, res)=>{
    CartModel.deleteCartItem(req.params.id, (err, cartitem)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'Product deleted successully!'});
    })
}