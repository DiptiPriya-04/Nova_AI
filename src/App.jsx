import Navbar from './components/navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import ContactFooter from './components/ContactFooter'

export default function App() {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <ContactFooter />
    </div>
  )
}