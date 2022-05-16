
const OrderModel = require('../models/order.model');

// get all order list
exports.getOrdersList = (req, res)=> {
    //console.log('here all orders list');
    OrderModel.getAllOrders((err, orders) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Orders', orders);
        res.send(orders)
    })
}

// get order by ID
exports.getOrderByID = (req, res)=>{
    //console.log('get emp by id');
    OrderModel.getOrderByID(req.params.id, (err, order)=>{
        if(err)
        res.send(err);
        console.log('single order data',order);
        res.send(order);
    })
}

// create new order
exports.createNewOrder = (req, res) =>{
    console.log(req.body)
    const orderReqData = new OrderModel(req.body);
    // console.log('orderReqData', orderReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        OrderModel.createOrder(orderReqData, (err, order)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Order Created Successfully'})
        })
    }
}

// update order
exports.updateOrder = (req, res)=>{
    const orderReqData = new OrderModel(req.body);
    console.log('orderReqData update', orderReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        OrderModel.updateOrder(req.params.id, orderReqData, (err, order)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Order updated Successfully'})
        })
    }
}

// delete order
exports.deleteOrder = (req, res)=>{
    OrderModel.deleteOrder(req.params.id, (err, order)=>{
        console.log("Params:",req.params.id)
        if(err)
        res.send(err);
        res.json({success:true, message: 'Order deleted successully!'});
    })
}