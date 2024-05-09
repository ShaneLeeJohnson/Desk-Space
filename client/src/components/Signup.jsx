// Imports Required for User Sign Up Functionality
import { useState } from "react";
import { useMutation } from "@apollo/client";
import {
  Flex, 
  Heading,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { SIGNUP_MUTATION } from "../utils/mutations";
import Auth from "../utils/auth";


// New User Sign Up Function
const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [addUser, { loading, error }] = useMutation(SIGNUP_MUTATION);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addUser({
        variables: {
          ...formData,
        },
      });
      Auth.login(data.addUser.token);
    } catch (error) {
      console.error(error);
    }
  };

  const buttonStyle = {
    ':hover': {
        opacity: 0.99
    }
}

  // Chakra Styling for User Sign Up
  return (
    <Flex justifyContent="center" bg="brand.800" w="100%" h="100vh" borderRadius="0 0 10px 10px">
      <Box p={4} bg="white" h="70%" minW="35%" mt="5" borderRadius="10px"> 
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl id="username">
              <Heading fontSize="28px" fontWeight="400" mb="4">Sign Up</Heading>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Please Enter User Name"
                borderColor="darkgray"
                borderWidth="2px"
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Please Enter Email"
                borderColor="darkgray"
                borderWidth="2px"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Please Enter Password"
                borderColor="darkgray"
                borderWidth="2px"
              />
            </FormControl>
            <Button type="submit" sx={buttonStyle} bg="brand.500" w="45%" border="solid 2px gray" mt="2" isLoading={loading}>
              {loading ? <Spinner size="sm" color="brand.800" /> : "Sign Up"}
            </Button>{" "}
            {error && <Text color="red">Error: {error.message}</Text>}
          </Stack>
        </form>
    </Box>
    </Flex>
  );
};

export default Signup;
