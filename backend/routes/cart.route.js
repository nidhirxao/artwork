const express = require('express');
const router = express.Router();

const cartController = require('../controllers/cart.controller');

// get all products
router.get('/', cartController.getCartItemsList);

// get product by ID
router.get('/:id',cartController.getCartItemByID);

// create new product
router.post('/', cartController.insertNewItem);

// update product
router.put('/:id', cartController.updateCartItem);

// delete product
router.delete('/:id',cartController.deleteCartItem);
router.delete('/',cartController.deleteAllItems);

module.exports = router;