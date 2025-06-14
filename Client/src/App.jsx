import React from 'react'
import Home from './Pages/Home'
import { Router, Routes, Route, BrowserRouter } from "react-router-dom"
import TourDetails from './components/TourDetails'
import Destinations from './components/Destinations'

export default function App() {
  return (
    <>
      <BrowserRouter>
      
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tour/:_id" element={<TourDetails />} />
            <Route path="/dest" element={<Destinations />} />
          </Routes>

      </BrowserRouter>

    </>
  )
}
