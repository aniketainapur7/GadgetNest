import { useState, useEffect } from 'react'
import Loader from './components/Loader'
import Header from './components/Header'
import Hero from './components/Hero'
import DeviceShowcase from './components/DeviceShowcase'
import ProductSpotlight from './components/ProductSpotlight'
import TechOfTheYear from './components/TechOfTheYear'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="app">
      <Header scrollY={scrollY} />
      <Hero scrollY={scrollY} />
      {/* <DeviceShowcase />
      <ProductSpotlight />
      <TechOfTheYear /> */}
      <Footer />
    </div>
  )
}

export default App