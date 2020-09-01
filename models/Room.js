const mongoose = require("mongoose");
const Message = require("./Message");

const RoomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  messages: {
    type: [Object],
    default: [],
  },
  // messages: {
  //   type: [mongoose.Schema.Types.ObjectId],
  //   ref: "Message",
  //   required: true,
  // },
  imageURL: {
    type: String,
  },
  participants: {
    type: [String],
    required: true,
  },

  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  // },
});
const Room = mongoose.model("Room", RoomSchema);

async function createRoom(name, participants, imageURL) {
  //const messages = [message];
  const room = new Room({
    name,
    // messages,
    participants,
    imageURL,
  });
  const result = await room.save();
  console.log(result);
}

async function listRooms() {
  const rooms = await RoomSchema.find();
  console.log(rooms);
}

//createMessage("Hello", "Ramesh");
//createRoom("AAJ KI PARTY", ["Ramesh", "Suresh"], "google.com");

// const RoomSchema = new mongoose.Schema({
//   text: {
//     type: String,
//     trim: true, //to determine white space
//     required: [true, "Please add some text"],
//   },
//   amount: {
//     type: Number,
//     required: [true, "Please add a positive or negative number"],
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

module.exports = Room;

//mongoose.model("Room", RoomSchema);
