const express = require('express');

const router = express.Router();
const auth = require('../middleware/auth');
const { uploadImage, getImageData } = require('../controller/imageData');

router.route('/').post(auth, uploadImage).get(auth, getImageData);

module.exports = router;
