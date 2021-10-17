const express = require('express');
const bodyParser = require("body-parser");
const app = express()
const http = require('http');
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);

const db = require('./config/db');
db.connect();

const route = require('./routes/index');

var cors = require('cors')
app.use(cors())
app.use(
  express.urlencoded({
      extended: false,
  }),
);
app.use(express.json());

io.on('connection', (socket) => {
    console.log("user connect");
    socket.on('disconnect', () => {
    console.log('user disconnected');
    });
    socket.on('chat message', function (msg) {
      console.log(msg);
      io.emit('chat message', msg);
    });
  });
// io.on('connection', socket => {
//     //Get the chatID of the user and join in a room of the same chatID
//     chatID = socket.handshake.query.chatID
//     socket.join(chatID)
//     //Leave the room if the user closes the socket
//     socket.on('disconnect', () => {
//         socket.leave(chatID)
//     })
//     //Send message to only a particular user
//     socket.on('send_message', message => {
//         receiverChatID = message.receiverChatID
//         senderChatID = message.senderChatID
//         content = message.content
//         //Send message to only that particular room
//         socket.in(receiverChatID).emit('receive_message', {
//             'content': content,
//             'senderChatID': senderChatID,
//             'receiverChatID':receiverChatID,
//         })
//     })
// });
route(app);
server.listen(process.env.PORT || 5000, () => {
    var port = server.address().port
    console.log(`listening on *:${port}`);
  });