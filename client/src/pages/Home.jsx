import { Flex, Box, Heading } from '@chakra-ui/react'
import DeskSpaceLogo from '../assets/img/deskspace-logo.png';

export default function Home() {
    return (
        <Flex flexFlow="column wrap" justifyContent="center" text-align="center" bg="brand.800">
            <Box textAlign="center" p="15px" m="0">
                {/* <Heading as="h2" color="brand.800" fontSize="48px" fontWeight="300" mb="5">DeskSpace</Heading> */}
                <Heading as="h4" color="brand.600" fontSize="32px" fontWeight="350" mb="1%" lineHeight="1.5">
                    Prep for tech interviews and save job listings with...
                </Heading>
            </Box>
            <Box alignSelf="center"  maxW="75%" maxH="75%" flexGrow="0 1 auto" mb="1%">
                <img src={DeskSpaceLogo}/>
                <Heading as="h3" fontSize="28px" fontWeight="350" color="brand.600" textAlign="center" mt="1%" mb="8%">
                    (Sign-up or Login to continue)
                </Heading>
            </Box>
        </Flex>
    )
}