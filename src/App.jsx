// styles
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import "./assets/css/simple-slider.css"

import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// base components
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import NotFound from "./components/NotFound"

// pages components
import Home from "./components/home/Home"
import About from "./components/about/About"


function App() {
  return (
    <BrowserRouter>
      <header>
        <MyNav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer>
        <MyFooter />
      </footer>
    </BrowserRouter>
  )
}

export default App
