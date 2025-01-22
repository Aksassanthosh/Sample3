import { useState } from 'react'

import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
 

  return (
    <>
    
    <Navbar/>
    <Routes>
    <Route path='/'element={<Home/>}></Route>
    <Route path='/login'element={<Login/>}></Route>
    <Route path='/register'element={<Register/>}></Route>
    </Routes>
    {/* <Register user2={myname:"tiya",email:"tiya@gmail.com"} */}
     {/* <Login/>
    <Register/>
    <Home/>  */}
    
     </>
  )
}

export default App
