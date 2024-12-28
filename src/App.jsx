import './App.css'
import Hero from './components/hero'
import About from './components/about'
import Skills from './components/skills'
import Services from './components/services'
import Contact from './components/contact'
import { LanguageProvider } from './context/LanguageContext'
import RootLayout from './layout/RootLayout'
function App() {

  return (
    <RootLayout>
    <LanguageProvider>
    <main className="min-h-screen bg-black text-white">
    <Hero />
    <About />
    <Skills />
    <Services />
    <Contact />
    </main>
    </LanguageProvider>
    </RootLayout>
  )
}

export default App