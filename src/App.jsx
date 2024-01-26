// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from "react"
import Header from "./header/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Magazin from "./pages/Magazin"
import './App.css'

function App() {

  return (
    <>
    <Header/>
    <Home/>
    <About/>
    <Magazin/>

    </>
  )
}

export default App
