const express = require('express');
const router = express.Router();
const jwtCheck = require('../../middleware/jwtCheck');

//controller
const {
	getDefaultAddress,
	setDefaultAddress,
	updateDefaultAddress,
	deleteDefaultAddress,
} = require('../../controller/defaultAddress.controller');

// @method: GET '/'
// @desc:  get default address
// @access: private

router.get('/', jwtCheck, getDefaultAddress);

// @method: POST '/'
// @desc:  set default address
// @access: private

router.post('/', jwtCheck, setDefaultAddress);

// @method: PATCH '/'
// @desc:  update default address
// @access: private

router.patch('/', jwtCheck, updateDefaultAddress);

// @method: DELETE '/:id'
// @desc:  delete default address
// @access: private

router.delete('/', jwtCheck, deleteDefaultAddress);

module.exports = router;
