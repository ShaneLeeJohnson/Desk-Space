import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

// Pages and Components Required for Application 
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Game from './components/Game'
import Login from './components/Login'
import Signup from './components/Signup'

// Routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route path='home' element={<Home />} />
      <Route path='profile' element={<Profile />} />
      <Route path='game' element={<Game />} />
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
