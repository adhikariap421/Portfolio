import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Jobs from './components/Jobs'
import Education from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [scrolled, setScrolled] = useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`app ${scrolled ? 'scrolled' : ''}`}>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Jobs />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
