import React from 'react'
import abt7 from "../images/holi7.jpg"
import abt9 from "../images/holi9.jpg"
import surf from "../images/surf.jpg"
import car from "../videos/vid5.mp4";
import airplane from "../videos/airplane-land.mp4";

const About = () => {

  return (
    <div id="about">
    <div className="mb-16 md:px-0 px-5">
       <div className="content">
        <div className="md:col-span-8">
           <p className="badge">Best Cocktails</p>
           <h2>
            Where every detail matters <span className="text-white">-</span>
               from muddle to garnish
           </h2>
        </div>
        
        <div className="sub-content">
           <p>
            Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable.
           </p>
           
           <div>
            <p className="md:text-3xl text-xl font-bold">
               <span>4.5</span>/5
            </p>
            <p className="text-sm text-white-100">
               More than +12000 customers
            </p>
           </div>
        </div>
       </div>
    </div>
    
    <div className="top-grid">
	<div className="md:col-span-3">
		 <div  className="noisy" />
		 <img src={surf} alt="grid-img-1" />
		</div>

       <div className="md:col-span-6">
        <div  className="noisy" />
        <video
      muted
      playsInline
      preload="auto"
      src={car}
      loop
      autoPlay
      className="car"
    />
       </div>
       
       <div className="md:col-span-3">
        <div  className="noisy" />
    <img src={abt9} alt="grid-img-5" />
       </div>
    </div>
    
    <div className="bottom-grid">
       <div className="md:col-span-8">
        <div  className="noisy" />
        <video
      muted
      playsInline
      preload="auto"
      src={airplane}
      loop
      autoPlay
      className="car"
    />
       </div>
       
       <div className="md:col-span-4">
        <div  className="noisy" />
    <img src={abt7} alt="grid-img-4" />
       </div>
    </div>
    
   </div>
  )
}

export default About