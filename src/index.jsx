import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home.jsx'
import Portfolio from './pages/portfolio.jsx'
import Cv from './pages/cv.jsx'
import Contact from './pages/contact.jsx'
import Header from './components/header.jsx'
import Error from './pages/error.jsx'
import './styles/index.scss'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/cv' element={<Cv />} />
        <Route path='/contact' element={<Contact />} />
        <Route element={<Error />} />



      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
