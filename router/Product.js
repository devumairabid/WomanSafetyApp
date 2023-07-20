const express = require('express');
const router = express.Router();
const productController = require('../controller/Product')






router
    .get('/', productController.getAll)
    .get('/:id', productController.getOne)
  

exports.router = router;