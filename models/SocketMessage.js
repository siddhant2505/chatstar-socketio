const mongoose = require("mongoose");

const SocketMessageSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, "Add something to send!"],
  },
  room: {
    type: String,
    required: [true, "Add name of the room to send!"],
  },
  sentAt: {
    type: String,
  },
  sender: {
    type: String,
    required: true,
  },
});
//const SocketMessage = mongoose.model("SocketMessage", SocketMessageSchema);

async function createSocketMessage(text, room, sentAt, sender) {
  const message = new SocketMessage({
    text,
    sender,
    room,
    sentAt,
  });
  const result = await message.save();
  console.log(result);
}
module.exports = mongoose.model("SocketMessage", SocketMessageSchema);
