// Imports Required for User Sign Up Functionality
import { useState } from "react";
import { useMutation } from "@apollo/client";
import {
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

  // Chakra Styling for User Sign Up
  return (
    <Box p={4} maxW="md" mx="auto">
      
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl id="username">
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
            <Button type="submit" colorScheme="blue" isLoading={loading}>
              {loading ? <Spinner size="sm" color="white" /> : "Sign Up"}
            </Button>{" "}
            {error && <Text color="red">Error: {error.message}</Text>}
          </Stack>
        </form>
     
    </Box>
  );
};

export default Signup;
