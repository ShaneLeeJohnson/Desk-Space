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
        <Flex flexFlow="column wrap" alignItems="center" justifyContent="center" bg="brand.900" color="brand.600">
            <Card onClick={() => setFlip(!flip)}
            className={`card ${flip ? 'flip' : ''}`}
            sx={cardStyle} borderStyle="solid" borderWidth="4px" borderColor="black" boxShadow="lg" maxW="90%" maxH="90%" minW="50%" minH="300px">
            {!flip && (
                <>
                <Heading as="h2" alignSelf="center" fontWeight="450" fontSize="22px" mt="15%" maxW="350px" lineHeight="1.5">{flashcard.question}</Heading>
                    {/* <List listStyleType='none'>{flashcard.choices.map((choice, index) => (<ListItem key={index} textAlign="left" mt="1">{choice}</ListItem>))}</List> */}
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