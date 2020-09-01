const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const http = require("http");
const axios = require("axios");
const socketIo = require("socket.io");
const bodyParser = require("body-parser");

const connectDB = require("./config/db");
const app = express();
app.use(bodyParser.json());
//const router = require("./router");
const rooms = require("./routes/rooms");
const socketMessages = require("./routes/socketMessages");
//app.use(router);
app.use("/api/v1/rooms", rooms);
app.use("/api/v1/socketmessages", socketMessages);

dotenv.config({ path: "./config/config.env" });
//const index = require("./routes/index");
connectDB();

app.use(express.json());
const server = http.createServer(app);
const io = socketIo(server);

const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");

io.on("connection", (socket) => {
  console.log("We have a new connection!!!");

  socket.on("join", ({ name, room }, callback) => {
    console.log(socket.id);
    const user = addUser({ id: socket.id, name, room });
    //if (error) return callback(error);
    console.log(user, "from join");
    socket.emit("message", {
      sender: "admin",
      room: user.room,
      text: `${user.name}, welcome to the ${user.room} room!  `,
      //text: `${user.name}, welcome to the ${user.room}`,
    });
    socket.broadcast.to(user.room).emit("message", {
      sender: "admin",
      room: user.room,
      text: `${user.name} has joined`,
      sentAt: "",
    });
    // socket.broadcast
    //   .to(user.room)
    //   .emit("message", { sender: "admin", text: `${user.name} has joined` });

    //socket.join(user.room);
    socket.join(user.room);
    console.log(`${user.name} has joined ${user.room} room`);
  });
  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);
    console.log(socket.id);
    console.log(user);
    io.to(user.room).emit(
      "message",
      message
      //{ sender: user.name, text: message }
    );
    axios
      .post("http://localhost:5000/api/v1/socketmessages", message)
      .then((res) => {
        console.log(`StatusCode: ${res.status}`);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(message);

    //callback();
  });

  socket.on("disconnect", () => {
    console.log("User has left!!!");
  });
});

//
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;
server.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
