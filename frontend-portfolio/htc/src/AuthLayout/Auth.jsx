import React from 'react'
import Navbar from "../component/Navbar"
import Contact from "../component/Contact"
import { Outlet } from 'react-router-dom'

const Auth = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Contact/>
</>
  )
}

export default Auth