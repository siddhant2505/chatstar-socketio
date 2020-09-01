const express = require("express");
const router = express.Router();
const {
  addSocketMessage,
  getSocketMessages,
} = require("../controllers/socketMessages");
// router.route("/").get(getRooms).post(addRoom);

// router.route("/:id").delete(deleteRoom).put(updateRoomMessage);
// router.route("/messages/:id").get(getMessages);
// router.route("/messages").post(addMessage);
router.route("/").get(getSocketMessages).post(addSocketMessage);
//router.route("/users").post(addUser);
//.post(addMessage);

module.exports = router;
