import { Flex, Box, Heading, Link, textDecoration } from '@chakra-ui/react';

export default function MyDesk() {
    const linkStyle = {
        ':hover': {
            textDecoration:'none',
        }
}
    const boxStyle = {
        ':hover': {
            borderWidth: '6px'
        }
    }
    const jobStyle = {
        ':hover': {
            bg: 'brand.600',
            color: 'brand.800'
        }
    }
    return (
        <Flex bg="brand.800" flexFlow="column wrap" justifyContent="center" alignItems="center" textAlign="center" borderRadius="0 0 10px 10px" p="30px">
        <Heading as="h2" color="brand.500" fontSize="38px" fontWeight="400" mb="5">MyDesk</Heading>
            <Link href="/flashcards" sx={linkStyle}>
                <Box display="flex" sx={boxStyle} justifyContent="center" alignSelf="center" bg="brand.600" borderStyle="solid" borderColor="black" borderWidth="4px" borderRadius="8px" boxShadow="lg" maxW="100%" maxH="100%" minH="230px" mt="2%">
                <Heading fontSize="26px" fontWeight="500" alignSelf="center" p="4">
                    Interview Prep Flashcards
                </Heading>
                </Box>
            </Link>
            <Link href="/jobs" sx={linkStyle}>
                <Box sx={jobStyle} mt="6" fontSize="22px" fontWeight="400" color="brand.900" bg="brand.500" w="150px" border="solid 4px black" borderRadius="10px" padding="8px">
                    Job Links
                </Box>
            </Link>
        </Flex>
    )
}