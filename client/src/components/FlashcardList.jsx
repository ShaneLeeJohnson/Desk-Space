import { Flex, Box, Button } from '@chakra-ui/react';
import { useState } from 'react';
import Flashcard from './Flashcard';

export default function FlashcardList({ flashcards }) {
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
        <Flex flexFlow="column wrap" justifyContent="center" textAlign="center">
            <Box bg="brand.800" color="brand.600">
                <Flashcard flashcard={flashcards[currentCardIndex]} key={flashcards[currentCardIndex].id}/>
                <Button sx={buttonStyle} onClick={nextCard} mt="1%" color="brand.600" bg="brand.900">Next Flashcard</Button>
            </Box>
        </Flex>
    )
}

