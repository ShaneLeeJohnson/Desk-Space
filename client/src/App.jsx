import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

// Pages and Components Required for Application 
import Loading from './layouts/Loading'
import Home from './pages/Home'
import MyDesk from './pages/MyDesk'
import InterviewPrep from './components/InterviewPrep'
import Login from './components/Login'
import Signup from './components/Signup'

// Routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Loading />}>
      <Route path='home' element={<Home />} />
      <Route path='mydesk' element={<MyDesk />} />
      <Route path='interviewprep' element={<InterviewPrep />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
