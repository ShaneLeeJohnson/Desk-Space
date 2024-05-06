import { useState } from 'react'
import { Flex, Card } from '@chakra-ui/react'
import '../App.css'

export default function Flashcard({ flashcard }) {
    const [flip, setFlip] = useState(false)
    
    const cardStyle = {
        ':hover': {
            cursor: 'pointer',
            animation: 'slide 2s linear'
        }
    }

    // Set flashcards to flip on click
    return (
    <Flex className={`card ${flip ? 'flip' : ''}`} flexFlow="column wrap" justifyContent="center" alignItems="center" bg="brand.800" color="brand.600"
        onClick={() => setFlip(!flip)}>
        <Card sx={cardStyle} flexGrow="0 1 auto"  borderStyle="solid" borderWidth="4px" borderColor="black" m="2%" boxShadow="lg" minW="70%" h="300px" pt="100px" pb="100px">
        {flip ? flashcard.answer : flashcard.question}
        </Card>
    </Flex>
    )
}