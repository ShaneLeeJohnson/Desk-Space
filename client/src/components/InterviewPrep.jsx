import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client';
import { Box, Heading } from '@chakra-ui/react'
import FlashcardList from './FlashcardList'
import '../App.css'

export default function InterviewPrep() {
    // const [flashcards] = useState(SAMPLE_FLASHCARDS)
    const { loading, error, data } = useQuery(FLASHCARDS);
    const [flashcards, setFlashcards] = useState([]);

    useEffect(() => {
        if (data) {
            setFlashcards(data.flashcards);
        }
    }, [data]);
    return (
        <>
            <Box textAlign="center" bg="brand.800" color="brand.600">
                <Heading>Interview Prep Flashcards</Heading>
                <Heading fontSize="22px" fontWeight="350" pt="2%">(Click on flashcard to flip it!)</Heading>
            </Box>
            <FlashcardList flashcards={flashcards} />
        </>
    );
}

const SAMPLE_FLASHCARDS = [
    {
        id: 1,
        question: 'Question 1',
        answer: 'Answer 1'
    },
    {
        id: 2,
        question: 'Question 2',
        answer: 'Answer 2'
    },
]
