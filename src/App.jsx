import { useState } from 'react'
import './App.css'
import Navbar from './StyledComps/Navbar/Navbar';
import Hero from './StyledComps/Hero/Hero';
import About from './StyledComps/About/About';
import About2 from './StyledComps/About2/About2';
import Work from './StyledComps/HWork/Work';
import Footer from './StyledComps/Footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Hero />
     <About />
     <About2 />
     <Work />
     <Footer />
    </>
  )
}

export default App
