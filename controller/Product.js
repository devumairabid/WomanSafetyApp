const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json', 'utf8'))
const product = data.products
const mongoose = require('mongoose');
const Product = require('../models/Product')
const jwt = require('jsonwebtoken');

exports.getAll= async(req, res) => {
    const product =  await  Product.find()
    console.log(product)
   res.json(product)
}
exports.getOne = async (req, res) => {
    const id = req.params.id;
    const product = await Product.findById(id).exec()
    res.json(product)
}




    // const products = product.find(p => p.id === id)
// exports.getAll = (req, res) => {
//     res.json(product)
// }