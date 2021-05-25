const express = require('express');

const router = express.Router();
const auth = require('../middleware/auth');
const { getUser, loginUser } = require('../controller/auth');

router.route('/').get(auth, getUser).post(loginUser);

module.exports = router;
