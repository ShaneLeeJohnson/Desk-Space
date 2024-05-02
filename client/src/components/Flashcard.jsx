import { useState } from 'react'

export default function Flashcard(flashcard) {
    const [flip, setFlip] = useState(false)
    return (
        <div onClick={() => setFlip(!flip)}>
            {flashcard.question}
        </div>
    )
}