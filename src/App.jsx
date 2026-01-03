import React from 'react'
import {Routes, Route} from 'react-router'
import Header from './Component/Header'
import Footer from './Component/Footer'
import { Home } from './Pages/Home'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App