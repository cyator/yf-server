const express = require('express');
const router = express.Router();
const jwtCheck = require('../../middleware/jwtCheck');

//controller
const {
	getAllOrders,
	getOrderById,
	createOrder,
} = require('../../controller/orders.controller');

// @method:get '/'
// @desc: fetch all orders for user
// @access: private

router.get('/', jwtCheck, getAllOrders);

// @method:get '/:id'
// @desc: fetch order by id
// @access: private

router.get('/:id', jwtCheck, getOrderById);

// @method:post '/'
// @desc: create order
// @access: private

router.post('/', jwtCheck, createOrder);

module.exports = router;
