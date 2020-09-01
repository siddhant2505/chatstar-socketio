import React from "react";
import { Box, Text, Flex } from "@chakra-ui/core";
import ClearSharpIcon from "@material-ui/icons/ClearSharp";
import EditIcon from "@material-ui/icons/Edit";
import Participants from "./Participants";
import SearchIcon from "@material-ui/icons/Search";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Scrollbars } from "react-custom-scrollbars";

const Info = ({ handleFlex, activeRoom, users }) => {
  return (
    <Box w="100%" h="93vh" bg="blue.500">
      <Scrollbars style={{ width: "100%", height: "100%" }}>
        <Flex
          width="100%"
          height="8.75vh"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          align="center"
          bg="blue.500"
        >
          <Flex flex={1}>
            <ClearSharpIcon
              onClick={() => {
                handleFlex();
              }}
              style={{
                opacity: "0.5",
                margin: "auto 20px ",
                fontSize: "24px",
                cursor: "pointer",
              }}
            />
            <Flex flex={7}>
              <Text opacity="0.7">Group Info</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          width="100%"
          height="30vh"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          align="center"
          bg="white"
        >
          <Flex flex={1} height="100%">
            <div style={{ margin: "auto", clipPath: "circle(45%)" }}>
              <img
                alt="room-profile"
                //my="auto"
                src={activeRoom.urlImage}
                width="150px"
                height="150px"
                // inLine
              />
            </div>
          </Flex>
        </Flex>
        <Flex
          width="100%"
          height="10vh"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          align="center"
          bg="white"
        >
          <Flex flex={1} position="relative" height="100%">
            <Text
              cursor="pointer"
              variantColor="black"
              w="100%"
              border="none"
              height="75%"
              overflow="hidden"

              //overflowX="hidden"
            >
              <div
                style={{
                  opacity: "0.8",

                  textAlign: "left",

                  margin: "auto 20px ",
                }}
              >
                {activeRoom.name}
                <br />
                <p
                  style={{
                    margin: "0px 0px",
                    opacity: "0.5",
                    textAlign: "left",
                    fontSize: "12px",
                    lineHeight: "30px",
                  }}
                >
                  Created 11/11//19 at 12:01 PM
                </p>
              </div>
            </Text>
            <EditIcon
              onClick={() => {
                console.log("clicked");
              }}
              style={{
                position: "absolute",
                right: "5px",
                top: "15px",
                opacity: "0.5",
                margin: "auto 20px ",
                fontSize: "16px",
                cursor: "pointer",
              }}
            />
          </Flex>
        </Flex>
        {/* <Divider /> */}

        <Box width="100%" marginTop="5px" bg="gray.100">
          <Flex flex={1} position="relative" width="100%" h="5vh" bg="gray.100">
            <Text margin="auto 20px " color="green.500">
              {activeRoom.participants.length} Participants
            </Text>
            <SearchIcon
              style={{
                position: "absolute",
                top: "12px",
                right: "5px",
                opacity: "0.5",
                margin: "auto 15px auto auto",
                fontSize: "16px",
                cursor: "pointer",
              }}
            />
          </Flex>
          {activeRoom.participants.map((userId) => {
            let participant = users.find((user) => user.id === userId);
            return <Participants user={participant} />;
          })}

          {/* <Participants />
          <Participants />
          <Participants />
          <Participants />
          <Participants /> */}
        </Box>
        <Box w="100%" h="6vh" bg="white" marginY="5px">
          <Flex flex={1}>
            <Text margin="auto 5px " color="red.500">
              <ExitToAppIcon
                style={{
                  //   position: "absolute",
                  //   top: "12px",
                  //   right: "5px",
                  //color: "red",
                  margin: "auto 0px auto 15px",
                  marginTop: "10px",
                  fontSize: "24px",
                  cursor: "pointer",
                }}
              />
            </Text>
            <Text margin="auto 20px " color="red.500">
              Leave Room
            </Text>
          </Flex>
          <Flex flex={5}></Flex>
        </Box>
      </Scrollbars>
    </Box>
  );
};

export default Info;
