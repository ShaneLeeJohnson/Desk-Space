// Imports Required for User Sign Up Functionality
import {useState, useEffect} from 'react';
import {useMutation} from '@apollo/client';
import {Box, Button, FormControl, FormLabel, Input, Stack} from '@chakra-ui/react';
import {SIGNUP_MUTATION} from '../utils/mutations';
import {setAuthToken} from '../utils/auth';

// New User Sign Up Function
const Signup = () => {
    const [formData, setFormData] = useState ({
        username: '',
        email: '',
        password: '',
    });
    const [token, setToken] = useState('');
    const [signupMutation, {loading,error}] = useMutation(SIGNUP_MUTATION);
    useEffect (() => {
        const token = localStorage.getItem('token');
        if (token) {
            setToken (token);
            setAuthToken (token);
        }
    }, []);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData ({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault ();
        try {
            const {data} = await signupMutation ({
                variables: {
                    username: formData.username,
                    email: formData.email,
                    password: formData.password,
                },
            });
            const {token} = data.signup;
            setToken (token);
            setAuthToken (token);
            localStorage.setItem ('token', token);
            console.log ('User Sign up Complete!');
        } catch (error) {
            console.error (error);
        }
    };

    // Chakra Styling for User Sign Up
    return (
        <Box p={4} maxW='md' mx='auto'>
            <form onSubmit={handleSubmit}>
                <Stack spacing={6}>
                    <FormControl id='username'>
                        <FormLabel>User Name</FormLabel>
                        <Input type='text' name='username' value={formData.username} onChange={handleChange} />
                    </FormControl>
                    <FormControl id='email'>
                        <FormLabel>Email</FormLabel>
                        <Input type='email' name='email' value={formData.email} onChange={handleChange} />
                    </FormControl>
                    <FormControl id='password'>
                        <FormLabel>Password</FormLabel>
                        <Input type='password' name='password' value={formData.password} onChange={handleChange} />
                    </FormControl>
                    <Button type='submit' colorScheme='green' isLoading={loading}>Sign Up</Button> {error && <p>Error: {error.message}</p>}
                </Stack>
            </form>
        </Box>
    );
};

export default Signup;