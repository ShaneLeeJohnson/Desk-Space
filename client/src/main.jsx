import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import Home from './pages/Home'
import MyDesk from './pages/MyDesk'
import InterviewPrep from './components/InterviewPrep'
import Login from './components/Login'
import Signup from './components/Signup'
import Flashcard from "./components/Flashcard"
import JobList from './components/JobList'

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

// Import Chakra
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/', 
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'mydesk', 
        element: <MyDesk />
      }, 
      {
        path: 'flashcards', 
        element: <InterviewPrep />
      },
      {
        path: 'flashcard', 
        element: <Flashcard />
      },
      {
        path: 'login', 
        element: <Login />
      },
      {
        path: 'signup', 
        element: <Signup />
      },
      {
        path: 'jobs', 
        element: <JobList />
      }
    ]
  }
])


const colors = {
  brand: {
    900: '#000000', // black
    800: '#4A5568', // dark gray
    700: '#FEEBC8', // light orange
    600: '#FFFFFF' // white
  }
}



const theme = extendTheme({ colors })
ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider theme={theme}>
     <RouterProvider router={router}/>
    </ChakraProvider>
)