import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { useState } from 'react'

// Pages and Components Required for Application 
import Home from './pages/Home'
import MyDesk from './pages/MyDesk'
import InterviewPrep from './components/InterviewPrep'
import Login from './components/Login'
import Signup from './components/Signup'
import FlashcardList from "./components/FlashcardList"
import Flashcard from "./components/Flashcard"
import Navbar from './components/Navbar'

// Routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navbar />}>
      <Route path='home' element={<Home />} />
      <Route path='mydesk' element={<MyDesk />} />
      <Route path='interviewprep' element={<InterviewPrep />} />
      <Route path='flashcards' element={<FlashcardList />} />
      <Route path='flashcard' element={<Flashcard />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
    </Route>
  )
)

function App() {
  const [flashcards] = useState(SAMPLE_FLASHCARDS)
  return (
    <div>
    <RouterProvider router={router} />
    <FlashcardList flashcards={flashcards}/>
    </div>
  )
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: 'Sample question',
    answer: 'Sample answer',
    options: [
      'A',
      'B',
      'C',
      'D'
    ]
  },
  {
  id: 2,
  question: 'Question 2',
  answer: 'Answer 2',
  options: [
    '1',
    '2',
    '3',
    '4'
    ]
  },
]
export default App
