import { Flex, Box, Heading, Link } from '@chakra-ui/react';

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
    const buttonStyle = {
        ':hover': {
            bg: 'brand.500',
            color: 'brand.900'
        }
    }
    return (
        <Flex bg="brand.800" flexFlow="column wrap" alignItems="center" textAlign="center" w="100%" h="100vh" borderRadius="0 0 10px 10px">               
            <Heading as="h2" color="brand.700" m="3" fontSize="38px" fontWeight="400">
                    My Desk
            </Heading>
                <Link href="/flashcards" sx={linkStyle}>
            <Box display="flex" sx={boxStyle} justifyContent="center" alignSelf="center" bg="brand.600" borderStyle="solid" borderColor="black" borderWidth="4px" borderRadius="8px" boxShadow="lg" maxW="100%" maxH="100%" minH="230px" mt="4">
                <Heading fontSize="26px" fontWeight="500" alignSelf="center" p="4">
                    Interview Prep Flashcards
                </Heading>
                </Box>
            </Link>
            <Link href="/jobs" sx={linkStyle}>
            <Box sx={buttonStyle} alignSelf="center" mt="10" fontSize="22px" fontWeight="400" color="brand.900" bg="brand.700" borderRadius="10px" maxW="100%" padding="8px">
                    Go to Jobs List
            </Box>
            </Link>
        </Flex>
    )
}