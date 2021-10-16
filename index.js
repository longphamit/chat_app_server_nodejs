const app = require('express')()
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

require('dotenv').config();
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html');
  });
console.log("set Socket");
io.on('connection', (socket) => {
    console.log('a user connected');
    console.log(socket.handshake.query)
    socket.on('disconnect', () => {
      console.log('user disconnected');
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
server.listen(3000, () => {
    console.log('listening on *:3000');
  });