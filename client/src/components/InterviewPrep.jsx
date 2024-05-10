import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client';
import { Flex, Box, Heading } from '@chakra-ui/react'
import FlashcardList from './FlashcardList'
import { GET_FLASHCARDS } from '../utils/queries';
import '../App.css'

export default function InterviewPrep() {
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
        <Box bg="black">
            <Heading fontWeight="600">Interview Prep Flashcards</Heading>
            <Heading fontSize="22px" fontWeight="350" m="2">(Click on flashcard to flip it)</Heading>
        </Box>
            <FlashcardList flashcards={flashcards}/>
        </Flex>
        </>
    );
}