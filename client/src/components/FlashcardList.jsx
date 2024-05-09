import { Flex, Box, Button, FormControl, Input, Heading } from '@chakra-ui/react';
import { useState, useRef } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_USER, GET_FLASHCARDS } from '../utils/queries';
import { ADD_CARD, REMOVE_CARD } from '../utils/mutations';
import Flashcard from './Flashcard';

export default function FlashcardList({ flashcards }) {
    console.log(flashcards);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const nextCard = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    }

    // Setting variables to store our queries and mutations
    const [getUser] = [useQuery(GET_USER)];
    const [getFlashcards] = [useQuery(GET_FLASHCARDS)];
    const [addCard] = useMutation(ADD_CARD);
    const [removeCard] = useMutation(REMOVE_CARD);
    // const [updateCard] = useMutation(UPDATE_CARD);

    // Get user and flashcard data
    const {data: userData } = getUser;
    const {data: flashcardsData } = getFlashcards;
    console.log(userData);
    console.log(flashcardsData);

    // Creating variables for user form inputs
    const [formData, setFormData] = useState({ question: "", answer: ""});
    const inputQuestion = useRef();
    const inputAnswer = useRef();

    // Function to create a new card
    const handleAddCard = async () => {
        try {
            await addCard({
                variables: {
                    question: formData.question,
                    answer: formData.answer,
                },
            });
            // Clear input fields after adding the card
            setFormData({ question: "", answer: "" }); 
            alert('Card added successfully!')
        } catch (error) {
            console.error(error);
        }
    };

    const handleDeleteCard = async (flashcard) => {
        const cardId = flashcard._id;
        try {
            // Remove the flashcard from the client-side array
            const updatedFlashcards = flashcards.filter(flashcard => flashcard._id !== cardId);
            setCurrentCardIndex(Math.min(currentCardIndex, updatedFlashcards.length - 1));
    
            // Update the user's list of flashcards in the database
            await removeCard({
                variables: {
                    _id: cardId,
                },
                refetchQueries: [{ query: GET_FLASHCARDS }, { query: GET_USER }],
            });
            alert('Card deleted successfully');
        } catch (error) {
            console.error('Error deleting card:', error.message);
            alert('Failed to delete card. Please try again.');
        }
    };

      // update state based on form input changes
const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
        ...formData,
        [name]: value,
    });
};

    // async function handleUpdateCard(cardId) {

    // }

    const buttonStyle = {
        ':hover': {
            bg: 'brand.600',
            color: 'brand.900',
            border: 'solid 4px black'
        }
    }
    return (
        // Shows a flashcard to the user with a "next" button and buttons to edit/delete flashcards
        <>
        <Flex bg="brand.900" flexFlow="column wrap" alignItems="center" textAlign="center">
            {flashcards && flashcards.length > 0 && (
                <Box color="brand.600">
                    <Button sx={buttonStyle} onClick={nextCard} p="4" m="2" color="brand.900" bg="brand.500" border="solid 4px black">Next</Button>
                    <Flashcard flashcard={flashcards[currentCardIndex]} key={flashcards[currentCardIndex]._id} />
                    <Button p="2" m="2" color="brand.900" bg="brand.700" border="solid 4px black">Edit Card</Button>
                    <Button onClick={()=>{handleDeleteCard(flashcards[currentCardIndex])}} p="2" m="2" bg="red.400" border="solid 4px black">Delete Card</Button>
                </Box>
            )}
        </Flex>
        <Flex flexFlow="column wrap" alignItems="center" textAlign="center" h="50vh">
        <Heading fontSize="26px" fontWeight="400" color="brand.600" mt="6" mb="2">Create A Flashcard</Heading>
            <Box p="2" bg="brand.500" borderRadius="10px" maxW="75%">
        <form onSubmit={handleAddCard}>
            <FormControl>
                <Input ref={inputQuestion} 
                placeholder="Enter question" 
                type="text" 
                name="question" 
                value={formData.question} 
                onChange={handleInputChange}
                bg="white"
                color="brand.900"/>

                <Input ref={inputAnswer} 
                placeholder="Enter answer"
                type="text" 
                name="answer"
                value={formData.answer}
                onChange={handleInputChange}
                bg="white"
                color="brand.900"/>
            <Button type="submit" m="2" bg="brand.600" border="solid 3px gray">Add Card</Button>
        </FormControl>
        </form>
            </Box>
        </Flex>
        </>
        )
    }