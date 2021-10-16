const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http);
require('dotenv').config();
app.get('/', (req, res) => {
    res.send("Node Server is running. Yay!!")
})
io.on('connect', socket => {
    console.log("hello")
    //Get the chatID of the user and join in a room of the same chatID
    chatID = socket.handshake.query.chatID
    socket.join(chatID)
    //Leave the room if the user closes the socket
    socket.on('disconnect', () => {
        socket.leave(chatID)
    })
    //Send message to only a particular user
    socket.on('send_message', message => {
        recipient = message.recipient
        sender = message.sender
        content = message.content
        //Send message to only that particular room
        socket.in(receiverChatID).emit('receive_message', {
            'content': content,
            'senderChatID': sender,
            'receiverChatID':recipient,
        })
    })
});
http.listen(process.env.PORT)