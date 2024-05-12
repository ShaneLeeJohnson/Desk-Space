import { Flex, Box, FormControl, Input, Heading, Button, IconButton } from '@chakra-ui/react';
import { DeleteIcon, AddIcon, EditIcon, ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';
import { useState, useRef } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_USER, GET_FLASHCARDS } from '../utils/queries';
import { ADD_CARD, REMOVE_CARD } from '../utils/mutations';
import Flashcard from './Flashcard';
import { Link } from 'react-router-dom';

export default function FlashcardList({ flashcards }) {
    console.log(flashcards);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const nextCard = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    }
    const prevCard = () => {
        setCurrentCardIndex ((prevIndex) => {
            if (prevIndex === 0) {
                return flashcards.length - 1;
            } else {
                return prevIndex - 1;
            }
        });
    };

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
            await removeCard({
                variables: {
                    _id: cardId,
                },
                refetchQueries: [{ query: GET_FLASHCARDS }, { query: GET_USER }],
            });
            if (updatedFlashcards.length === 0) {
                setCurrentCardIndex (0);
            } else {
                setCurrentCardIndex (Math.min(currentCardIndex, updatedFlashcards.length -1));
            }
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

const buttonStyle = {
    ':hover': {
        bg: 'white'
    }
}
return (
    <>
    <Flex bg="brand.900" flexFlow="column wrap" alignItems="center" textAlign="center" h="100%">
        {flashcards && flashcards.length > 0 ? (
            <Box color="brand.600">
            <Flashcard flashcard={flashcards[currentCardIndex]} key={flashcards[currentCardIndex]._id} />
                <Flex justifyContent='center'>
                    <IconButton p="2" m="2" mr="12" color="brand.900" bg="brand.700">
                        <Link to={`/edit/${flashcards[currentCardIndex]._id}`}>
                            <EditIcon />
                        </Link>
                    </IconButton>
                    <IconButton onClick={prevCard} sx={buttonStyle} p="4" m="2" color="brand.900" bg="brand.500">
                        <ArrowBackIcon />
                    </IconButton>
                    <IconButton  onClick={nextCard} sx={buttonStyle}  p="4" m="2" color="brand.900" bg="brand.500">
                        <ArrowForwardIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDeleteCard(flashcards[currentCardIndex])} p="2" m="2" ml="12" bg="red.400">
                        <DeleteIcon />
                    </IconButton>
                </Flex>
            </Box>
        ) : (
            <Box color='brand.600' p='4' mt='10'>
                <Heading fontSize="24px" mb="2" color="brand.700" fontWeight="400">Your flashcard deck is empty!</Heading>
            </Box>
        )}
    </Flex>
    <Flex flexFlow="column wrap" alignItems="center" textAlign="center" h="75vh">
    <Heading fontSize="24px" fontWeight="300" color="brand.600" mt="6" mb="4">Create A Flashcard</Heading>
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
        <Button type='submit' m='2' bg='brand.600' border='solid 3px gray'><AddIcon /></Button>
    </FormControl>
    </form>
        </Box>
    </Flex>
    </>
    )
}
