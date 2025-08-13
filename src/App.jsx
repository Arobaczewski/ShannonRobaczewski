import About from './Components/About'
import Contact from './Components/Contact'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Projects from './Components/Projects'
import Skills from './Components/Skills'


function App() {

  return (
    <>
    <Header/>
      <Hero/>
        <About/>
        <Skills/>
      <Projects/>
    <Contact/>
    </>
  )
}

export default App
