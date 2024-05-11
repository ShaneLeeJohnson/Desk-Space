import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client';
import { Flex, Box, Heading } from '@chakra-ui/react'
import FlashcardList from './FlashcardList'
import { GET_FLASHCARDS } from '../utils/queries';
import '../App.css'

// Function to get flashcards and display them on the page
export default function FlashcardPage() {
    const { loading, error, data } = useQuery(GET_FLASHCARDS);
    const [flashcards, setFlashcards] = useState([]);

    useEffect(() => {
        if (data) {
            console.log("data", data)
            setFlashcards(data.flashcards[0].flashcards);
        }
    }, [data]);
    return ( 
        <>
    <Flex flexFlow="column wrap" justifyContent="center" textAlign="center" bg="brand.900" color="brand.600">
        <Box>
            <Heading fontWeight="300" fontSize="32px" mb="3">My Flashcards</Heading>
        </Box>
            <FlashcardList flashcards={flashcards}/>
    </Flex>
        </>
    );
}