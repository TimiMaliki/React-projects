import React from 'react'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { SplitText } from 'gsap/all'
// import {ScrollTrigger} from "gsap/all"

// gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
useGSAP(() => {

    const heroSplit = new SplitText(".title" , {
        type : "chars , words"
    })

    const paragraphSplit = new SplitText(".subtitle" , {
        type : "lines"
    })

    heroSplit.chars.forEach((char) => {
          char.classList.add("text-gradient")
    })

    gsap.from(heroSplit.chars , {
        yPercent : 100,
        duration : 1.8,
        ease: "expo.Out",
        stagger : 0.06,
    })

    gsap.from(paragraphSplit.lines , {
        yPercent : 100,
        opacity : 0,
        delay : 1,
        duration : 1.8,
        ease: "expo.Out",
        stagger : 0.06,
    })


},[])
  return (
    <>
    <section id="hero" className="noisy">
      <h1 className="title">DRIVE</h1>

      <div className="body">
        {/* <img src="/images/arrow.png" alt="arrow" className="arrow" /> */}
        <div className="content">
          <div className="space-y-5 hidden md:block">
            <p>Cool. Crisp. Classic.</p>
            <p className="subtitle">
              Sip the Spirit <br /> of Summer
            </p>
          </div>

          <div className="view-cocktails">
            <p className="subtitle">
              Every cocktail on our menu is a blend of premium ingredients,
              creative flair, and timeless recipes — designed to delight your
              senses.
            </p>
            <a href="#cocktails">View cocktails</a>
          </div>
        </div>
      </div>
    </section>
{/* 
    <div className="video absolute inset-0">
      <video ref={videoRef} muted playsInline preload="auto" src={car} loop />
    </div> */}
  </>
  )
}

export default Hero