import React from 'react'
import Navbar from '../Component/NavBar'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from '../Component/Footer'


const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <ScrollRestoration/>
    <Footer/>
    </>
  )
}

export default Layout