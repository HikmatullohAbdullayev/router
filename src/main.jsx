import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider,Route, createRoutesFromElements } from 'react-router-dom'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import MagazinLayout from './layout/MagazinLayout'
import NotFound from "./pages/NotFound"
import Texnika from './magazin/Texnika.jsx'
import Smartfon from './magazin/Smartfon.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      
      <Route path="/magazin" element={<MagazinLayout />} >
        <Route path='texnika' element={<Texnika/>}/>
        <Route path='smartfon' element={<Smartfon/>}/>


      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Route>
  )
);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   <RouterProvider router={router}/>


  </React.StrictMode>,
)
