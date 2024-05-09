import { useState } from "react";
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
import Auth from "../utils/auth";
import { LOGIN_MUTATION } from "../utils/mutations";
import { useMutation } from "@apollo/client";

const LoginForm = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [login, { error, loading}] = useMutation(LOGIN_MUTATION);

  // update state based on form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formData },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormData({
      username: "",
      password: "",
    });
  };
  
  const buttonStyle = {
    ':hover': {
        opacity: 0.99
    }
}
  return (
    <>
    <Flex justifyContent="center" bg="brand.800" w="100%" h="100vh" borderRadius="0 0 10px 10px">
      <Box p={4} bg="white" h="60%" minW="35%" mt="5" borderRadius="10px">
      <Heading fontSize="28px" fontWeight="400" textAlign="left" mb="4">Login</Heading>
              <form onSubmit={handleFormSubmit}>
            <Stack spacing={4}>
              <FormControl id="username">
                <FormLabel>Username</FormLabel>
                <Input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Please Enter User Name"
                  borderColor="gray"
                  borderWidth="2px"
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Please Enter Password"
                  borderColor="gray"
                  borderWidth="2px"
                />
              </FormControl>
              <Button type="submit"  sx={buttonStyle} bg="brand.500" w="45%" border="solid 2px gray" mt="2" isLoading={loading}>
                {loading ? <Spinner size="sm" color="gray" /> : "Login"}
              </Button>{" "}
              {error && <Text color="red">Error: {error.message}</Text>}
            </Stack>
          </form>
      </Box>
      </Flex>
    </>
  );
};

export default LoginForm;
