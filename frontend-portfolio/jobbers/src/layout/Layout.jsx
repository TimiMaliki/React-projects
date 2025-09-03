import React from 'react'
import Navbar from '../Component/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../Component/Footer'


const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout