const express = require("express");
const router = express.Router();
const {
  getRooms,
  addRoom,
  deleteRoom,
  //getRoom,
  getMessages,
  addUser,
  addSocketMessage,
  getSocketMessages,
  addMessage,
  updateRoomMessage,
} = require("../controllers/rooms");

router.route("/").get(getRooms).post(addRoom);

router.route("/:id").delete(deleteRoom).put(updateRoomMessage);
router.route("/messages/:id").get(getMessages);
router.route("/messages").post(addMessage);
//router.route("/socketmessages").get(getSocketMessages).post(addSocketMessage);
//router.route("/users").post(addUser);
//.post(addMessage);

module.exports = router;
