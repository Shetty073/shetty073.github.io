import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-dark-bg selection:bg-primary-500/30 selection:text-primary-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default App
