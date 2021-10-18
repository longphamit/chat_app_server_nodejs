//Send message to only a particular user
const PeerSocket=(socket)=>{
    socket.on("PEER_MESSAGE", (message) => {
    });
}
module.exports = PeerSocket;