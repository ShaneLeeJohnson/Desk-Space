import { Flex, Box, Heading, Text, textDecoration } from '@chakra-ui/react'
import DeskSpaceLogo from '../assets/img/deskspace-logo.png';
import {Link} from 'react-router-dom';
import Auth from "../utils/auth";

export default function Home() {
    const linkStyle = {
        ':hover': {
            textDecoration: "underline"
        }
    }
    const isLoggedIn = Auth.loggedIn ();
    return (
        <Flex flexFlow="column wrap" justifyContent="center" text-align="center" bg="brand.800" h="100%">
            <Box textAlign="center" p="15px" m="0">
                {/* <Heading as="h2" color="brand.800" fontSize="48px" fontWeight="300" mb="5">DeskSpace</Heading> */}
                <Heading as="h4" color="brand.600" fontSize="26px" fontWeight="300" mb="1%" lineHeight="1.5" flexShrink="2">
                    Create your own flashcard deck and save sticky notes on...
                </Heading>
            </Box>
            <Box alignSelf="center"  maxW="90%" maxH="90%" mb="1%" flexShrink="0">
                <img src={DeskSpaceLogo} alt='Desktop Logo'/>
                {!isLoggedIn &&
                <Flex flexDirection="column" wrap="column wrap" justify='center' align='center' h="100%">
                    <Box fontSize="24px" fontWeight="350" color="white" textAlign="center" mt="2" mb="5">
                        <Link to='/signup'>
                            <Text color="brand.500" sx={linkStyle}>Sign Up</Text>
                        </Link> 
                        <Text>or</Text>
                        <Link to='/login' color="brand.500">
                            <Text color="brand.500" sx={linkStyle}>Login</Text>
                        </Link> 
                        <Text>to continue</Text>
                    </Box>
                </Flex>
                }
            </Box>
        </Flex>
    )
}

{/* <Link to='/signup'>
<Heading as="h3"  flexShrink="1">
    Sign Up
</Heading>
</Link>
<Text color='white' m='4'>OR</Text>
<Link to='/login'>
<Heading as="h3" sx={linkStyle} fontSize="22px" fontWeight="350" color="white" textAlign="center" mt="1%" mb="8%" flexShrink="1">
    Log In
</Heading>
</Link>
<Text color='white' m='4'>To Continue...</Text> */}