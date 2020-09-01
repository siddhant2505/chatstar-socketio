const SocketMessage = require("../models/SocketMessage");

exports.addSocketMessage = async (req, res, next) => {
  try {
    //const { text, sender, sentAt, room } = req.body;
    const socket = await SocketMessage.create(req.body);
    //console.log(text);
    return res.status(201).json({
      success: true,
      data: socket,
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
        error: "Server Error dassadd",
      });
    }
  }
};

exports.getSocketMessages = async (req, res, next) => {
  try {
    const socketMessages = await SocketMessage.find();
    return res.status(200).json({
      success: true,
      count: socketMessages.length,
      data: socketMessages,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error kyu aarha h",
    });
  }
};
