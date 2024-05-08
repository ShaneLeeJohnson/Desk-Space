import { useState } from "react";
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

  return (
    <>
      <Box p={4} maxW="md" mx="auto">
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
                  onChange={handleInputChange}
                  placeholder="Please Enter Password"
                  borderColor="darkgray"
                  borderWidth="2px"
                />
              </FormControl>
              <Button type="submit" colorScheme="blue" isLoading={loading}>
                {loading ? <Spinner size="sm" color="white" /> : "Login"}
              </Button>{" "}
              {error && <Text color="red">Error: {error.message}</Text>}
            </Stack>
          </form>
        
      </Box>
    </>
  );
};

export default LoginForm;
