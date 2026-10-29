import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Destinations from './components/Destinations'
import Stats from './components/Stats'
import About from './components/About'
import CTA from './components/CTA'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Destinations />
        <Stats />
        <About />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
