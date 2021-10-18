//Send message to only a particular user
const GroupSocket=(socket)=>{
    console.log("group_message");
    socket.on("GROUP_MESSAGE", (message) => {
        // var receiverChatID = message.receiverChatID;
        // var senderChatID = message.senderChatID;
        // var senderChatName = message.senderChatName;
        // var content = message.content;
        //save message to db
        //Message 
        //emit message to user in room
        //socket.to(chatID).emit("event","meo meo");
        socket.emit("GROUP_MESSAGE","meo meo");
    });
}
module.exports = GroupSocket;