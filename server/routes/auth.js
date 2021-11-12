const express = require('express');

const router = express.Router();
const auth = require('../middleware/auth');
const { getUser, loginUser, logoutUser } = require('../controller/auth');

router.route('/').get(auth, getUser).post(loginUser);
router.route('/logout').post(auth, logoutUser);

module.exports = router;
