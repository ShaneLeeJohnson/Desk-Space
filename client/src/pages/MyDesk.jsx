import { Flex, Box, Heading, Link, Text } from '@chakra-ui/react';
import {useState, useEffect} from 'react'
import quotes from '../utils/quotes.json';

export default function MyDesk() {
    const [randomQuote, setRandomQuote] = useState ('');
    useEffect (() => {
        const getRandomQuote = () => {
            const randomIndex = Math.floor(Math.random () * quotes.length);
            return quotes[randomIndex];
        };
        setRandomQuote (getRandomQuote ());
    }, []);
    const linkStyle = {
        ':hover': {
            textDecoration:'none',
        }
}
    const buttonStyle = {
        ':hover': {
            borderColor: 'white'
        }
    }

    return (
        <Flex bg="brand.800" flexFlow="column wrap" alignItems="center" textAlign="center" w="100%" h="100%" borderRadius="0 0 10px 10px">               
            <Heading as="h2" color="brand.700" m="3" fontSize="38px" fontWeight="400">
                    My Desk
            </Heading>
            {randomQuote && (
                <Text fontSize='24px' fontFamily="" fontWeight='300' color='white'>
                    "{randomQuote.quote}"
                </Text>
            )}
                <Link href="/flashcards" sx={linkStyle} maxW="90%" minW="30%">
            <Box display="flex" sx={buttonStyle} justifyContent="center" alignSelf="center" bg="brand.600" border="solid 2px black" borderRadius="8px" boxShadow="3px 3px 3px 3px black" maxW="100%" maxH="100%" minH="230px" mt="4">
                <Heading fontSize="26px" fontWeight="500" alignSelf="center" p="4">
                    My Flashcards Deck
                </Heading>
                </Box>
            </Link>
            <Link href="/notes" sx={linkStyle}>
                    <Box sx={buttonStyle} alignItems="center" justifyContent="center" mt="5" mb="10" bg="brand.700" border="solid 1px black" borderRadius="10px" maxW="100%" padding="8px" h="150px" w="175px" boxShadow="2px 2px 2px 2px black">
                        <Text fontSize="22px" fontWeight="400" color="brand.900" mt="10">Sticky Notes</Text>
                    </Box>
            </Link>
        </Flex>
    )
}