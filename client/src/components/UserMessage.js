import React from "react";
import { Box } from "@chakra-ui/core";

const UserMessage = ({ message, time, name }) => {
  return (
    <>
      <Box
        isInline="true"
        //width="300px"
        maxWidth="50%"
        display="flex"
        // alignSelf="right"
        // direction="flex-end"
        //maxHeight="200px"
        borderRadius="10px"
        position="relative"
        padding="0 15px 10px 15px"
        //display="flex-end"
        //maxHeight="100px"
        margin="15px auto 0px 30px"
        bg="blue.500"
      >
        <p
          style={{
            marginTop: "5px",
            top: "5px",
            left: "15px",
            height: "20px",
            fontWeight: "bold",
            position: "absolute",
            fontSize: "14px",
            textAlign: "left",
            overflow: "hidden",
          }}
        >
          {name}
        </p>
        <br />
        <p style={{ marginTop: "35px", textAlign: "left" }}>{message}</p>
        <div
          style={{
            fontSize: "12px",
            position: "absolute",
            right: "10px",
            bottom: "5px",
          }}
        >
          {time}
          {/* {new Date().getHours()}:{new Date().getMinutes()} */}
        </div>
      </Box>
    </>
  );
};

export default UserMessage;
