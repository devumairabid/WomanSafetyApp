const SendMessage = require('../models/Feedback')
exports.message_sent = (req, res,) => {
    console.log(req.body, 'Message Sent');
    const messageSent = new SendMessage(req.body)
    messageSent.save();
    res.json(messageSent)
    console.log(messageSent);
}


