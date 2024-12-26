import './App.css'
import Hero from './components/hero'
import About from './components/about'
import Skills from './components/skills'
import Services from './components/services'
import Contact from './components/contact'
import { LanguageProvider } from './context/LanguageContext'
function App() {

  return (
    <LanguageProvider>
    <main className="min-h-screen bg-black text-white">
    <Hero />
    <About />
    <Skills />
    <Services />
    <Contact />
    </main>
    </LanguageProvider>
  )
}

export default App