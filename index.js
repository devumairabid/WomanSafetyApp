const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const app = express();
const httpServer = createServer(app);
const mongoose = require('mongoose');
const productRouter = require('./router/Product')

const authRouter = require('./router/Auth')
const imageRouter = require('./router/Image')
const discriptionRouter = require('./router/MessageSent')
var cors = require('cors')


const io = new Server(httpServer);
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('send_message', (msg) => {
        io.emit('receive_message', msg);
    })

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});
app.use(cors())
app.use(express.json());
app.use('/auth', authRouter.router)
app.use('/products', productRouter.router)
app.use('/', imageRouter.router);
app.use('/message', discriptionRouter.router)
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb+srv://umairabid927:Gpcsf-790838@cluster0.c1hdudn.mongodb.net/authentication');
    console.log('Database connected');
}
httpServer.listen(3000, (req, res) => {
    console.log('Server Started');
})





























// const auth = ((req, res, next) => {
//     try {
//         const token = req.get('Authorization').split('Bearer ')[1];
//         console.log(token);
//         var decoded = jwt.verify(token, publicKey);
//         console.log(decoded);
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