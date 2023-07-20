const express = require('express');
const router = express.Router();
const messageController = require('../controller/SendMessage')






router

    .post('/discription', messageController.message_sent)





exports.router = router;