const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {},
  roomsJoined: {
    type: [mongoose.Schema.Types.ObjectId],
  },
  status: {
    type: String,
    default: "Urgent Calls only",
  },
  imageURL: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
});

async function createUser(name, status, roomsJoined, email, imageURL) {
  const user = new User({
    name,
    status,
    roomsJoined,
    email,
    imageURL,
  });
  const result = await user.save();
  console.log(result);
}

module.exports = mongoose.model("User", UserSchema);
