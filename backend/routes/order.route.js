const express = require('express');
const router = express.Router();

const orderController = require('../controllers/order.controller');

// get all order
router.get('/', orderController.getOrdersList);

// get order by ID
router.get('/:id',orderController.getOrderByID);

// create new order
router.post('/', orderController.createNewOrder);

// update order
router.put('/:id', orderController.updateOrder);

// delete order
router.delete('/:id',orderController.deleteOrder);

module.exports = router;