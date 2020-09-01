const Room = require("../models/Room");
const Message = require("../models/Message");

const User = require("../models/User");

exports.getRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    return res.status(200).json({
      success: true,
      count: rooms.length,
      data: rooms,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
// exports.getRoom = async (req, res, next) => {
//   try {
//     const room = await Room.findById(req.params.id);
//     return res.status(200).json({
//       success: true,
//       data: room,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       error: "Server Error",
//     });
//   }
// };

exports.addRoom = async (req, res, next) => {
  try {
    const { name, messages, participants, imageURL } = req.body;
    const room = await Room.create(req.body);
    return res.status(201).json({
      success: true,
      data: room,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const errMessages = Object.values(err.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        error: errMessages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};

exports.deleteRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) {
      return res.status(404).json({
        success: false,
        error: "No room Found",
      });
    }
    await room.remove();
    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

exports.getMessages = async (req, res, next) => {
  try {
    //messages = ["sid", "siddd"];
    const room = await Room.findById(req.params.id);

    const messages = [];
    const messagesId = room.messages;

    for (let i in messagesId) {
      let message = await Message.findById(messagesId[i]);
      messages.push(message);
    }

    return res.status(200).json({
      success: true,
      data: messages,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

exports.addUser = async (req, res, next) => {
  try {
    //res.send("hello");
    const { name, roomsJoined, email, imageURL } = req.body;
    const user = await User.create(req.body);
    return res.status(201).json({
      success: true,
      data: user,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const errMessages = Object.values(err.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        error: errMessages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};
exports.addMessage = async (req, res, next) => {
  try {
    //res.send("hello");
    const { text, sender } = req.body;
    const message = await Message.create(req.body);
    return res.status(201).json({
      success: true,
      data: message,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const errMessages = Object.values(err.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        error: errMessages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};
exports.updateRoomMessage = async (req, res, next) => {
  try {
    //res.send("hello");
    // const { text, sender } = req.body;
    let room = await Room.findById(req.params.id);
    const id = { _id: req.params.id };

    const message = await Message.create(req.body);
    room.messages.push(message);
    const update = { messages: room.messages };

    //room.messages[room.messages.length] = message;
    const updatedRoom = await Room.findOneAndUpdate(id, update);
    return res.status(201).json({
      success: true,
      data: updatedRoom,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const errMessages = Object.values(err.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        error: errMessages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};
