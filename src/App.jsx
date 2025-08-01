import { useState, useEffect } from 'react'
import Loader from './components/Loader'
import Hero from './components/Hero'
import DeviceShowcase from './components/DeviceShowcase'
import TechOfTheYear from './components/TechOfTheYear'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageLayout from './layout/PageLayout'

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
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Hero />} />
          <Route path="products" element={<DeviceShowcase />} />
          <Route path="trending" element={<TechOfTheYear />} />
          {/* <Route path="team" element={<Team page />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App