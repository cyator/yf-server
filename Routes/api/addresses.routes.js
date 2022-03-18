const express = require('express');
const router = express.Router();
const jwtCheck = require('../../middleware/jwtCheck');

//controller
const {
	getAllUserAddresses,
	getAddressById,
	createAddress,
	updateAddressById,
	deleteAddressById,
} = require('../../controller/address.controller');

// @method: GET '/'
// @desc: get a list of all addresses for user
// @access: private

router.get('/', jwtCheck, getAllUserAddresses);

// @method: GET '/:id'
// @desc: get a address by id
// @access: private

router.get('/:id', jwtCheck, getAddressById);

// @method: POST '/'
// @desc: create an address
// @access: private

router.post('/', jwtCheck, createAddress);

// @method: PATCH '/:id'
// @desc: update address by id
// @access: private

router.patch('/:id', jwtCheck, updateAddressById);

// @method: DELETE '/:id'
// @desc:  delete address
// @access: private

router.delete('/:id', jwtCheck, deleteAddressById);

module.exports = router;
