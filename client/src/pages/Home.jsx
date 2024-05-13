import { Flex, Box, Heading, Text, textDecoration } from '@chakra-ui/react'
import DeskSpaceLogo from '../assets/img/deskspace-logo.png';
import Auth from "../utils/auth";
import '../App.css'
export default function Home() {
    const isLoggedIn = Auth.loggedIn ();
    return (
        <Flex flexFlow="column wrap" alignItems="center" text-align="center" bg="brand.800" h="100vh">
                <Heading textAlign="center" as="h4" color="brand.600" fontSize="26px" fontWeight="300" mt="2" lineHeight="1.5" flexShrink="0">
                    Create your own flashcard deck and save sticky notes on...
                </Heading>
            <Box alignSelf="center" flexShrink="2" w="500px" maxW="80%" mt="4">
                <img className="deskspacelogo" src={DeskSpaceLogo} alt='Desktop Logo'/>
                {!isLoggedIn &&
                    <Text fontSize="24px" fontWeight="350" color="white" textAlign="center" mt="6" mb="5"><a href="/signup" className="links">Sign Up</a> or <a href="login" className="links">Login</a> to continue</Text>
                }
            </Box>
        </Flex>
    )
}