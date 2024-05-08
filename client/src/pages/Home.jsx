import { Flex, Box, Heading } from '@chakra-ui/react'
import DeskSpaceLogo from '../assets/img/deskspace-logo.png';

export default function Home() {
    return (
        <Flex flexFlow="column wrap" justifyContent="center" text-align="center" bg="brand.800">
            <Box textAlign="center" p="15px" m="0">
                {/* <Heading as="h2" color="brand.800" fontSize="48px" fontWeight="300" mb="5">DeskSpace</Heading> */}
                <Heading as="h4" color="brand.600" fontSize="26px" fontWeight="300" mb="1%" lineHeight="1.5" flexShrink="2">
                    Prep for job interviews with flashcards and save your job listing links with...
                </Heading>
            </Box>
            <Box alignSelf="center"  maxW="90%" maxH="90%" mb="1%" flexShrink="0">
                <img src={DeskSpaceLogo}/>
                <Heading as="h3" fontSize="22px" fontWeight="350" color="brand.600" textAlign="center" mt="1%" mb="8%" flexShrink="1">
                    Sign-up or Login to continue
                </Heading>
            </Box>
        </Flex>
    )
}