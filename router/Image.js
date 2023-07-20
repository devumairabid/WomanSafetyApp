const express = require('express');
const router = express.Router();
const imageController = require('../controller/Image')






router
    .post('/image', imageController.imageUpload)
    .get('/image', imageController.getImage)


exports.router = router;