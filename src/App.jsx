import { useState } from 'react'
// import './css/style.css'
// import './css/bootstrap.css'
// import './css/flexslider.css'
// import './css/animate.css'


import Navbar from './components/Navbar'
import SiteHero from './components/SiteHero'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import AboutMe from './components/AboutMe'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <SiteHero/>
      <Portfolio/>
      <Resume/>
      <AboutMe />
      <Services />
      <Contact/>
    </>
  )
}

export default App
