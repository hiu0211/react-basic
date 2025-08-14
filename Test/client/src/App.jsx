import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header/header'

import './App.css'
import Footer from './components/Footer/footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default App
