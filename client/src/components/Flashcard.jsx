import React from 'react'
import {Flex, Box, Heading, Text} from '@chakra-ui/react'
import '../App.css'
import {useSpring, animated} from 'react-spring';

export default function Flashcard({flashcard}) {
    const [isFlipped, setFlipped] = React.useState(false);
    const {transform, boxShadow} = useSpring ({
        transform: `perspective(600px) rotateY(${isFlipped ? 180 : 0}deg)`,
        boxShadow: isFlipped ? '0px 4px 20px rgba(0, 0, 0, 0.2)' : '0px 4px 20px rgba(0, 0, 0, 0.1)',
        config: {mass:6, tension:800, friction:60}
    });
    const handleFlip = () => {
        setFlipped (!isFlipped);
    };
    return (
        <Flex flexFlow='column wrap' alignItems='center' justifyContent='center' bg='brand.900' color='brand.600'>
            <animated.div style = {{transform,
                boxShadow: isFlipped ? '-8px 8px 8px rgba(0, 0, 0, 0.2)' : '8px 8px 8px rgba(0, 0, 0, 0.1)',
                whiteSpaceCollapseidth: '350px',
                maxWidth: '100%',
                height: '200px',
                minWidth: "100%",
                borderRadius: '10px',
                cursor: 'pointer',
                backgroundColor: 'white',
                border: '2px solid white',
                transition: 'border-color 0.3s',
            }}
            onClick={handleFlip}
            _hover={{bg:'brand.700'}}
        >       
                <Box p="5" mt="0">
                    <Heading fontSize='lg' fontWeight='bold' color={isFlipped ? 'black' : 'white'} textAlign='center' style={{transform:isFlipped ? 'rotateY(180deg)' : 'none'}}>
                        {isFlipped ? flashcard.answer : flashcard.question}
                    </Heading>
                    {!isFlipped && (
                        <Text fontSize='lg' color='black' fontWeight='bold' textAlign='center'>{flashcard.question}</Text>
                    )}
                </Box>
            </animated.div>
        </Flex>
    )
}