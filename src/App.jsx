
import React from "react"


import './App.css'
import Header from "./header/Header"
import { Outlet } from "react-router-dom"

function App() {

  return (
    <>
      
      <header >

<Header/>
</header>
<main className="w-[1240px] mx-auto mt-10">
  <Outlet/>
</main>

      

    </>
  )
}

export default App



