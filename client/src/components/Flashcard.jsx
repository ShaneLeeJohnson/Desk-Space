import { useState } from 'react'
import { Box, Card } from '@chakra-ui/react'
import '../App.css'

export default function Flashcard({ flashcard }) {
    const [flip, setFlip] = useState(false)

    return (
    <Box display="inline-flex" gap="2" className={`card ${flip ? 'flip' : ''}`} 
        onClick={() => setFlip(!flip)}>
        <Box className="front"></Box>
        <Box className="back"></Box>
        <Card borderStyle="solid" borderWidth="4px" borderColor="black" m="2%" padding="10px" maxH="80%" maxW="80%" minH="275px" minW="285px">
        {flip ? flashcard.answer : flashcard.question}
        </Card>
    </Box>
    )
}