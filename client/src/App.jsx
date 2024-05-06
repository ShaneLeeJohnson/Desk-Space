import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
// Pages and Components Required for Application 
import Home from './pages/Home'
import MyDesk from './pages/MyDesk'
import InterviewPrep from './components/InterviewPrep'
import Login from './components/Login'
import Signup from './components/Signup'
import Flashcard from "./components/Flashcard"
import Navbar from './components/Navbar'
import JobList from './components/JobList'
import Footer from './components/Footer'
import './App.css';
// Routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Home />} />
      <Route path='mydesk' element={<MyDesk />} />
      <Route path='flashcards' element={<InterviewPrep />} />
      <Route path='flashcard' element={<Flashcard />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path='jobs' element={<JobList />} />
    </Route>
  )
)

function App() {
  return (
    <div>
    <Navbar />
    <RouterProvider router={router} />
    {/* <FlashcardList flashcards={flashcards}/> */}
    <Footer />
    </div>
  )
}

export default App