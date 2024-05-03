import { Flex, Box, Heading } from '@chakra-ui/react'
import '@fontsource-variable/noto-sans-jp';
import DeskSpaceLogo from '../assets/img/deskspace-icon.png';

export default function Home() {
    return (
        <Flex flexFlow="column wrap" justifyContent="center" text-align="center">
            <Box textAlign="center" bg="brand.700" p="15px" m="0">
                <Heading as="h2" color="brand.800" fontSize="48px" fontWeight="300" mb="5">DeskSpace</Heading>
                <Heading as="h4" color="brand.900" fontSize="22px" mb="5" fontWeight="500"  lineHeight="1.5">
                    A space for developers to prep for tech interviews with flashcards and save job listings 
                </Heading>
                <Heading as="h3" fontSize="25px" fontWeight="450" color="brand.900">
                    Please <span><a href="">Login</a></span> or <span><a href="">Signup</a></span> to continue
                </Heading>
            </Box>
            <Box alignSelf="center" minW="385px" minH="285px" maxW="55%" maxH="55%" mb="10%" flexGrow="0 1 auto">
                <img src={DeskSpaceLogo}/>
            </Box>
        </Flex>
    )
}