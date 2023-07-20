const mongoose = require('mongoose');

const ImageSaved = require('../models/ImageSave');

exports.imageUpload = async (req, res, next) => {
    try {
        const body = req.body;
        console.log("body", body);
        const image = await ImageSaved.create(body);
        image.save();
        res.json(image)
        res.status(201).json({ msg: 'Image saved successfully' });
    } catch (error) {
        res.status(409).json({ error: error.message });

    }

};
exports.getImage = async (req, res) => {
    try {
        const product = await ImageSaved.find({}).then(data => res.json(data))
        console.log(product);
        res.status(201).json({ msg: 'Image get successfully' });
    } catch (error) {
        res.status(201).json({ error: error.message });

    }

}