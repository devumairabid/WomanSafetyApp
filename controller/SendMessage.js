const SendMessage = require('../models/Feedback')
exports.message_sent = (req, res,) => {
    (req.body, 'Message Sent');
    const messageSent = new SendMessage(req.body)
    messageSent.save();
    res.json(messageSent)
        (messageSent);
}


