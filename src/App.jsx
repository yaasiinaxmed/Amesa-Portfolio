import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Social from "./components/Social"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="bg-white dark:bg-[#09111f]">
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Contact/>
      <Social/>
      <Footer/>
    </div>
  )
}

export default App
