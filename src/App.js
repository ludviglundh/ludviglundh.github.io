import './App.css'
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { pages } from './constants'

import Home from './features/home/Home'
import About from './features/about/About'
import Contact from './features/contact/Contact'

function App() {
  return (
    <Routes>
      <Route path={pages.home} element={<Home />} />
      <Route path={pages.about} element={<About />} />
      <Route path={pages.contact} element={<Contact />} />
    </Routes>
  )
}

export default App
