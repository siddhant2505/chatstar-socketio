import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import DraftsIcon from "@material-ui/icons/Drafts";
import { auth, provider, fbProvider } from "../firebase";
import {
  Stack,
  Input,
  InputGroup,
  Box,
  SimpleGrid,
  InputLeftElement,
  Button,
  FormControl,
  Divider,
  Image,
} from "@chakra-ui/core";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

const Form = () => {
  // eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();

  const GoogleSignIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  const FacebookSignIn = () => {
    auth
      .signInWithPopup(fbProvider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <SimpleGrid
      h="93vh"
      mx="auto"
      mt="auto"
      mb="20px"
      columns={1}
      mw="30%"
      px="30px"
      bg="white"
    >
      <Box w="400px" h="90vh" mx="auto" my="auto">
        <div style={{ textAlign: "center" }}>
          <Image
            src="https://i.pinimg.com/originals/60/d4/d3/60d4d31e4f2b18abaee11da6281ff6ea.png"
            w="250px"
          />
        </div>
        <form action="submit">
          <Stack spacing={3}>
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement children={<PersonIcon />} />
                <Input
                  type="name"
                  placeholder="Full Name"
                  aria-label="Full Name"
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement children={<DraftsIcon />} />
                <Input type="email" placeholder="Email" aria-label="Email" />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement children={<LockIcon />} />
                <Input
                  type="password"
                  placeholder="Your Password"
                  aria-label="password"
                />
              </InputGroup>
            </FormControl>
            <Divider />
            <Button type="submit" variant="solid" variantColor="green">
              SIGN UP!
            </Button>
            <Divider />
            <div style={{ textAlign: "center" }}>
              <h2>OR</h2>
            </div>
            <Divider />
            <Button
              type="submit"
              onClick={GoogleSignIn}
              variant="solid"
              variantColor="red"
            >
              SIGN IN USING GOOGLE
            </Button>
            <Button
              onClick={FacebookSignIn}
              type="submit"
              variant="solid"
              variantColor="blue"
            >
              SIGN IN USING FACEBOOK
            </Button>
          </Stack>
        </form>
      </Box>
    </SimpleGrid>
  );
};

export default Form;
