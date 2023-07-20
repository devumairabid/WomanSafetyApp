const mongoose = require('mongoose');

const discriptionSchema = new mongoose.Schema({
    discription: {
        type: String,
        required: [true, 'disciption is required']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }


});

const SendMessage = mongoose.model('discription', discriptionSchema);
module.exports = SendMessage;
