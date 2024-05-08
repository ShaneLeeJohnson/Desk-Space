import { useState } from 'react'
import { Flex, Card, Heading, List, Text, ListItem } from '@chakra-ui/react'
import '../App.css'

export default function Flashcard({ flashcard }) {
    const [flip, setFlip] = useState(false)
    
    const cardStyle = {
        ':hover': {
            cursor: 'pointer'
        }
    }

    // Set flashcards to flip on click
    return (
        <Flex className={`card ${flip ? 'flip' : ''}`} flexFlow="column wrap" alignItems="center" bg="brand.800" color="brand.600"
            onClick={() => setFlip(!flip)}>
            <Card sx={cardStyle} alignItems="center" borderStyle="solid" borderWidth="4px" borderColor="black" my="1%" mb="0" boxShadow="lg" maxW="90%" maxH="90%" minW="60%" minH="300px">
            {!flip && (
                <>
                <Heading flexGrow="0 1 auto" as="h2" fontWeight="450" fontSize="22px" mt="4%" mb="1%" maxW="350px" lineHeight="1.5">{flashcard.question}</Heading>
                    <List listStyleType='none'>{flashcard.choices.map((choice, index) => (<ListItem key={index} textAlign="left" mt="1">{choice}</ListItem>))}</List>
                </>
            )}
            {flip && (
                <>
                <Heading fontSize="24px" fontWeight="500" mt="10" mb="0">Answer</Heading>
                <Text fontSize="22px" fontWeight="350" textAlign="center" mt="4">{flashcard.answer}</Text>
                </>
            )}
            </Card>
        </Flex>
        )
}