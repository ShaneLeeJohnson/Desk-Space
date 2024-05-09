import { Flex, Box, Button } from '@chakra-ui/react';
import { useState } from 'react';
import Flashcard from './Flashcard';

export default function FlashcardList({ flashcards }) {
    console.log(flashcards)
    const buttonStyle = {
        ':hover': {
            bg: 'brand.600',
            color: 'brand.900',
            border: 'solid 4px black'
        }
    }

    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const nextCard = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    }
    return (
        // Shows a flashcard to the user with a "next" button 
        <Flex bg="brand.800" flexFlow="column wrap" justifyContent="center" textAlign="center" mb="4%">
            {flashcards && flashcards.length > 0 && (
                <Box color="brand.600">
                    <Flashcard flashcard={flashcards[currentCardIndex]} key={flashcards[currentCardIndex]._id} />
                    <Button sx={buttonStyle} onClick={nextCard} mt="2%" color="brand.600" bg="brand.900">Next Flashcard</Button>
                </Box>
            )}
        </Flex>
    )
}

