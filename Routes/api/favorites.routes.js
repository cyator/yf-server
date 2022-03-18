const express = require('express');
const router = express.Router();
const jwtCheck = require('../../middleware/jwtCheck');

//controller
const {
	getFavorites,
	addToFavorites,
	deleteFromFavorites,
} = require('../../controller/favorites.controller');

// @method:get '/'
// @desc: fetch all favorites
// @access: private

router.get('/', jwtCheck, getFavorites);

// @method:post '/'
// @desc: add to favorites
// @access: private

router.post('/', jwtCheck, addToFavorites);

// @method:delete '/:id'
// @desc: remove product from Favorites
// @access: private

router.delete('/:id', jwtCheck, deleteFromFavorites);

module.exports = router;
