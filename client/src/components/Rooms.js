import React from "react";
import { Flex } from "@chakra-ui/core";

const Rooms = ({ room, handleActiveRoom }) => {
  return (
    <>
      <Flex
        onClick={() => {
          console.log("clicked");
          handleActiveRoom(room);
        }}
        position="relative"
        w="100%"
        h="4vw"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        bg="white"
        marginY="5px"
      >
        <Flex h="4vw" flex={3}>
          <div style={{ margin: "auto", clipPath: "circle(45%)" }}>
            <img
              alt="profile-pic"
              //my="auto"
              src={room.urlImage}
              //src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              width="40px"
              height="40px"

              // inLine
            />
          </div>
        </Flex>
        <Flex
          h="4vw"
          flex={10}
          bg="white"
          overflow="hidden"
          style={{ textOverflow: "ellipsis" }}
        >
          <div
            style={{
              margin: "auto 0 0 0",
              marginTop: "9px",
              textAlign: "left",
            }}
          >
            {room.name}
            <br />
            <p
              style={{
                margin: "2px 0px 2px 0px",
                lineHeight: "30px",
                opacity: "0.5",
                width: "100%",

                textAlign: "left",
              }}
            >
              {room.messages[room.messages.length - 1].text}
              {/* Participant 1, Participant 2, Participant 3,Paricipant 4,
              Participant 5, Participant 6 */}
            </p>
          </div>
          <div
            style={{
              fontSize: "12px",
              position: "absolute",
              right: "10px",
              top: "10px",
              opacity: "0.5",
            }}
          >
            {room.messages[room.messages.length - 1].sentAt}
            {/* {new Date().getHours()}:{new Date().getMinutes()} */}
          </div>
          <div
            style={{
              margin: "auto",
              backgroundColor: "green",
              clipPath: "circle(45%)",
              position: "absolute",
              right: "10px",
              top: "30px",
              width: "25px",
              height: "25px",
              color: "white",
              fontWeight: "bold",
              //paddingTop: "5px",
            }}
          >
            <div>2</div>
          </div>
        </Flex>
        {/* <Flex flex={6} bg="pink"></Flex> */}
      </Flex>
    </>
  );
};

export default Rooms;
