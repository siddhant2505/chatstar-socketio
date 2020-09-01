import React from "react";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
} from "@chakra-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Rooms from "./Rooms";
import { Scrollbars } from "react-custom-scrollbars";
import { useStateValue } from "../StateProvider";

const Profile = ({ rooms, handleActiveRoom }) => {
  const [{ user }] = useStateValue();

  return (
    <Box w="100%" bg="blue.500">
      <Flex h="8.75vh" w="100%">
        <Flex flex={1.5}>
          <div style={{ margin: "auto", clipPath: "circle(45%)" }}>
            <img
              alt="profile-pic"
              //my="auto"
              src={
                user
                  ? user.photoURL
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
              width="40px"
              height="40px"

              // inLine
            />
          </div>
        </Flex>
        <Flex flex={2} />
        <Flex flex={3}>
          <DonutLargeIcon
            style={{
              opacity: "0.5",
              margin: "auto 15px auto auto",
              fontSize: "24px",
              cursor: "pointer",
            }}
          />

          <ChatIcon
            style={{
              opacity: "0.5",
              margin: "auto 15px",
              fontSize: "24px",
              cursor: "pointer",
            }}
          />
          <MoreVertIcon
            style={{
              opacity: "0.5",
              margin: "auto 25px auto 15px",
              fontSize: "24px",
              cursor: "pointer",
            }}
          />
        </Flex>
      </Flex>
      <Flex h="6.25vh" w="100%">
        <Box
          h="100%"
          w="100%"
          justifyContent="center"
          alignItems="center"
          borderRadius="20px"
        >
          <InputGroup m="auto" h="100%" w="90%">
            <InputLeftElement
              children={<Icon name="search" color="gray.300" />}
            />
            <Input
              h="70%"
              w="85%"
              m="auto"
              mt="6px"
              border="none"
              borderRadius="20px"
              placeholder="Start a new Chat"
              size="sm"
            />
          </InputGroup>
        </Box>
      </Flex>
      <Box
        width="100%"
        height="78vh"
        //overflowX="hidden"
        //overflowY="scroll"

        //flexDirection="row"
        //alignItems="center"
        // justifyContent="center"
        // align="center"
        //bg="gray.100"
      >
        {" "}
        <Scrollbars style={{ width: "100%", height: "100%" }}>
          {/* <Flex h="78vh" flexDirection="row" w="100%" bg="black"> */}
          {rooms.map((room, index) => {
            return (
              <Rooms
                room={room}
                key={index}
                handleActiveRoom={handleActiveRoom}
              />
            );
          })}
          {/* <Rooms />
          <Rooms />
          <Rooms />
          <Rooms />
          <Rooms />
          <Rooms />
          <Rooms />
          <Rooms />
          <Rooms />
          <Rooms />
          <Rooms /> */}
        </Scrollbars>
        {/* <Rooms /> */}
      </Box>
    </Box>
  );
};

export default Profile;
