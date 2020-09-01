const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, "Add something to send!"],
  },
  sentAt: {
    type: Date,
    default: Date.now,
  },
  sender: {
    type: String,
    required: true,
  },
});

async function createMessage(text, sender) {
  const message = new Message({
    text,
    sender,
  });
  const result = await message.save();
  console.log(result);
}

module.exports = mongoose.model("Message", MessageSchema);
