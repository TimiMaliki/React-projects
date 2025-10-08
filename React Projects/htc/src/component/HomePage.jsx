import React from 'react'
import About from "../component/About";
import BookingServices from "../component/BookingServices";
import Books from "../component/Books";
import Hero from "../component/Hero";
import Movies from "../component/Movies";


const HomePage = () => {
  return (
    <>
      <Hero />
      <Books />
      <About />
      <Movies />
      <BookingServices />
    </>
  )
}

export default HomePage