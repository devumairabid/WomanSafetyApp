const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const app = express();
const httpServer = createServer(app);
const mongoose = require('mongoose');


const authRouter = require('./router/Auth')
const imageRouter = require('./router/Image')
const discriptionRouter = require('./router/MessageSent')
var cors = require('cors')
const port = process.env.PORT || 3000;


const io = new Server(httpServer);
io.on('connection', (socket) => {
    ('a user connected');
    socket.on('send_message', (msg) => {
        io.emit('receive_message', msg);
    })

    socket.on('disconnect', () => {
        ('user disconnected');
    });
});
app.use(cors())
app.use(express.json());
app.use('/auth', authRouter.router)

app.use('/', imageRouter.router);
app.use('/message', discriptionRouter.router)
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb+srv://umairabid927:Gpcsf-790838@cluster0.c1hdudn.mongodb.net/authentication');
    ('Database connected');
}
httpServer.listen(port, (req, res) => {
    (`Server listening on ${port}`);
})




























// const auth = ((req, res, next) => {
//     try {
//         const token = req.get('Authorization').split('Bearer ')[1];
//         (token);
//         var decoded = jwt.verify(token, publicKey);
//         (decoded);
//         if (decoded.email) {
//             next();
//         }
//         else {
//             res.sendStatus(401, 'Invalid')
//         }
//     } catch (error) {
//         res.sendStatus(401, 'Invalid')
//     }
// })