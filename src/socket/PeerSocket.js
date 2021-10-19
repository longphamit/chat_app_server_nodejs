const Message = require('../app/models/Message');
const PEER_EVENT = "PEER_MESSAGE";

//Send message to only a particular user
const PeerSocket=(socket)=>{
    socket.on(PEER_EVENT, (data) => {
        data = JSON.parse(data);
        var receiverId = data.receiverId;
        var senderId = data.senderId;
        var senderName = data.senderName;
        var content = data.content;
        Message.create({ SenderId: senderId,SenderName:senderName, ReceiverId: receiverId, Content: content }).then(result => {
            //emit message to user in room
            socket.to(receiverId).emit(PEER_EVENT, result);
        }).catch(e=>{console.log(e)});
    });
}
module.exports = PeerSocket;