import { Flex, Box, Heading } from '@chakra-ui/react';

export default function MyDesk() {
    return (
        <Flex bg="brand.800" flexFlow="column wrap" justifyContent="center" textAlign="center" borderRadius="10px" mt="2%" ml="10%" mr="10%" p="30px">
        <Heading as="h2" color="brand.700" fontSize="48px" fontWeight="300" mb="5">MyDesk</Heading>
                <Box display="flex" alignSelf="center" bg="brand.600" borderStyle="solid" borderColor="black" borderWidth="3px" boxShadow="lg" maxW="285px" maxH="250px" minW="175px" minH="150px" mt="2%">
                <Heading fontSize="28px" alignSelf="center">
                    <button><a href="/flashcards">Interview Prep Flashcards</a></button>
                </Heading>
                </Box>
                <Box mt="5%" fontSize="22px" fontWeight="400" color="brand.900" bg="brand.700" ml="40%" mr="40%" borderRadius="10px" padding="10px">
                <a href="/jobs"><button>Job Links</button></a>
                </Box>
        </Flex>
    )
}