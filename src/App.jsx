import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import AboutMe from './components/AboutMe/AboutMe'
import NavBar from './components/NavBar/Navbar'


function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/aboutme' element={<AboutMe/>} />
      </Routes>
    </div>
  )
}

export default App
