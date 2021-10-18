const Message = require("../app/models/Message");
const GROUP_MESSAGE="GROUP_MESSAGE";
//Send message to only a particular user
const GroupSocket=(socket)=>{
    socket.on(GROUP_MESSAGE, (message) => {
        var receiverId = message.receiverChatID;
        var senderId = message.senderChatID;
        var senderName = message.senderChatName;
        var content = message.content;
        //save message to db
        Message.create({SenderId: senderId,SenderName:senderName, ReceiverId: receiverId, Content: content}).then(result => {
            //emit message to user in room
            socket.to(receiverId).emit(GROUP_MESSAGE,result);
        }).catch(next);
    });
}
module.exports = GroupSocket;