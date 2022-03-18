const express = require('express');
const router = express.Router();
const jwtCheck = require('../middleware/jwtCheck');

const { stk, CallBackURL, stkQuery } = require('../controller/stk.controller');

const generateAccessToken = require('../middleware/generateAccessToken');

router.post('/', jwtCheck, generateAccessToken, stk);

router.post('/callback', jwtCheck, CallBackURL);

router.post('/query', jwtCheck, generateAccessToken, stkQuery);

module.exports = router;
