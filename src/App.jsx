import { useState } from 'react'
import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/hero'
import Content from './components/Content/content'
import Reviews from './components/Reviews/reviews'
import Footer from './components/Footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Navbar/> */}
      <Hero/>
      <Content/>
      <Reviews/>
      <Footer/>
    </>
  )
}

export default App
