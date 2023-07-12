import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Vision from './components/Vision'
import Services from './components/Services'
import Clients from './components/Clients'
import ProjectsList from './components/ProjectsList'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import ResponsiveNav from './components/ResponsiveNav'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Navbar />
      <Home />
      <About />
      <Vision />
      <Services />
      <Clients />
      <ProjectsList />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App
