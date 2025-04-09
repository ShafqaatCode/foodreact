import { useState } from 'react'
import './App.css'
import Navbar from './StyledComps/Navbar/Navbar';
import Hero from './StyledComps/Hero/Hero';
import About from './StyledComps/About/About';
import About2 from './StyledComps/About2/About2';
import Work from './StyledComps/HWork/Work';
import Footer from './StyledComps/Footer/Footer';
import ExploreFood from './StyledComps/FoodPrice/ExploreFood';
import Faq from './StyledComps/Faqs/Faqs';
import Subscribe from './StyledComps/Subscribe/Subscribe';
import Contact from './StyledComps/Contact/Contact';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Hero />
     <About />
     <About2 />
     <ExploreFood />
     <Work />
     <Subscribe />
     <Faq />
     <Contact />
     <Footer />
   
    </>
  )
}

export default App
