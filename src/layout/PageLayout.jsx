import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'


function PageLayout() {
  const layoutStyles = {
    main: {
      paddingTop: '80px', // Adjust based on your Header height
      paddingBottom: '60px', // Adjust if Footer has height
      minHeight: 'calc(100vh - 140px)', // 80 (header) + 60 (footer)
      backgroundColor: '#0c011a',
      color: 'white',
    }
  }

  return (
    <>
      <Header />
      <main style={layoutStyles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default PageLayout