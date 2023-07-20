const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    myFile: String
});

const userImage = mongoose.model('Image', imageSchema);
module.exports = userImage;
