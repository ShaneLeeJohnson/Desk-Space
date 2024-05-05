import { useState } from 'react'
import FlashcardList from './FlashcardList'
import '../App.css'

export default function InterviewPrep () {
    const [flashcards] = useState(SAMPLE_FLASHCARDS)
    return ( 
            <FlashcardList flashcards={flashcards}/>
    );
}

const SAMPLE_FLASHCARDS = [
    {
        id: 1,
        question: 'Sample question',
        answer: 'Sample answer'
    },
    {
        id: 2,
        question: 'Question 2',
        answer: 'Answer 2'
    },
]
