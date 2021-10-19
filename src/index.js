const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const path = require("path");
const { Server } = require("socket.io");
const io = require("socket.io")(server);

const db = require("./config/db");
db.connect();

const route = require("./routes/index");

var cors = require("cors");
const GroupSocket = require("./socket/GroupSocket");
const PeerSocket = require("./socket/PeerSocket");
app.use(cors());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
app.get("/home", function (req, res) {
  res.sendFile(path.join(__dirname + "/home.html"));
});

io.on("connection", (socket) => {
  //Get the chatID of the user and join in a room of the same chatID
  chatID = socket.handshake.query?.chatID;
  console.log(socket.handshake.query);
  console.log(chatID);
  console.log("user connect");
  if (chatID) {
    console.log("---join chanel---");
    socket.join(chatID);
  }

  //Leave the room if the user closes the socket
  socket.on("disconnect", () => {
    console.log("user disconnected");
    if (chatID) {
      socket.leave(chatID);
    }
  });
  GroupSocket(socket);
  PeerSocket(socket);
});
route(app);
server.listen(process.env.PORT || 5000, () => {
  var port = server.address().port;
  console.log(`listening on *:${port}`);
});
