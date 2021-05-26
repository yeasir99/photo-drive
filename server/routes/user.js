const express = require('express');

const router = express.Router();
const { register } = require('../controller/user');

router.post('/', register);

module.exports = router;
