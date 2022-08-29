const { json } = require("body-parser");
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });
server.listen(3111, () => {
  console.log("server running:3111");
});

app.get("/", (req, res) => {
  res.send("hi");
});

io.on("connection", (socket) => {
  console.log(` user connected :${socket.id}`);
  socket.on("sendMsg", (msg) => {
    console.log(msg);
    io.emit("rmsg", msg);
  });
});
