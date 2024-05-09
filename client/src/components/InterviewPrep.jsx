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
            setFlashcards(data.flashcards);
        }
    }, [data]);
    return ( 
        <>
        <Flex flexFlow="column wrap" justifyContent="center" textAlign="center" bg="brand.800" color="brand.600">
        <Box bg="brand.900">
            <Heading>Interview Prep Flashcards</Heading>
            <Heading fontSize="22px" fontWeight="350">(Click on flashcard to flip it!)</Heading>
        </Box>
            <FlashcardList flashcards={flashcards}/>
        </Flex>
        </>
    );
}

const SAMPLE_FLASHCARDS = [
    {
        id: 1,
        question: 'Which HTML tag is used to define an unordered list?',
        choices: ['A. <ol>', 'B. <list>', 'C. <ul>', 'D. <li>'],
        answer: 'C. <ul>'
    },
    {
        id: 2,
        question: 'In JavaScript, which method is used to add a new element to the end of an array?',
        choices: ['A. push()', 'B. append()', 'C. add()', 'D. insert()'],
        answer: 'A. push()'
    },
    {
        id: 3,
        question: 'Which CSS property is used to add space between the border and content inside an element?',
        choices: ['A. padding', 'B. margin', 'C. order-spacing', 'D. space-between'],
        answer: 'A. padding'
    },
    {
        id: 4,
        question: 'What does the document.getElementById() function do in JavaScript?',
        choices: ['A. Finds the first element with the specified class name', 'B. Retrieves an element by its ID attribute', 'C. Selects all elements with the specified tag name', 'D. Returns the value of the specified CSS property for an element'],
        answer: 'B. Retrieves an element by its ID attribute'
    },
    {
        id: 5,
        question: 'In React, what is used to conditionally render content?',
        choices: ['A. if-else statements', 'B. ternary operators', 'C. switch-case statements', 'D. conditional rendering'],
        answer: 'D. conditional rendering'
    },
    {
        id: 6,
        question: 'What does the setState function do in React?',
        choices: ['A. Updates the components state', 'B. Sets the value of a state variable', 'C. Adds a new item to an array', 'D. Fetches data from an API'],
        answer: 'A. Updates the components state'
    },
    {
        id: 7,
        question: 'Which CSS property is used to change the text color of an element?',
        choices: ['A. font-color', 'B. color', 'C. text-color', 'D. font-style'],
        answer: 'B. color'
    },
    {
        id: 8,
        question: 'Which HTML attribute is used to specify the URL of the image in the <img> tag?',
        choices: ['A. src', 'B. href', 'C. link', 'D. url'],
        answer: 'A. src'
    },
    {
        id: 9,
        question: 'What does the onChange event do in React?',
        choices: ['A. Triggers when the component is mounted', 'B. Fires when the input field value changes', 'C. Executes when the component is unmounted', 'D. Occurs when the mouse moves over an element'],
        answer: 'B. Fires when the input field value changes'
    },
    {
        id: 10,
        question: 'Which CSS property is used to specify the font size of text?',
        choices: ['A. font-size', 'B. text-size', 'C. size', 'D. font-style'],
        answer: 'A. font-size'
    },
]