import React from 'react'
import leftImage from "../images/cocktail-left-leaf.png"
import rightImage from "../images/cocktail-right-leaf.png"
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import { SplitText} from 'gsap/all'


const Hero = () => {
    useGSAP(() => {
  const heroSplit = new SplitText(".title",{
    type:"chars, words"
  })

  const paragraphsSplit = new SplitText(".subtitle",{
    type:"lines"
  })

  heroSplit.chars.forEach((char) => {
    char.classList.add("text-gradient")
  })

  gsap.from(heroSplit.chars, {
    yPercent : 100,
    duration:1.8,
    ease: "expo.out",
    stagger:0.06
  })

  gsap.from(paragraphsSplit.lines, {
    yPercent : 100,
    opacity:0,
    duration:1.8,
    ease: "expo.out",
    stagger:0.06,
    delay: 1,
  })

//   gsap.timeline({
//     scrollTrigger :{
//         trigger:".title",
//         start:"top 5%",
//         end:"bottom 85%",
//         scrub: true,
//         markers:true
//     }
//   })
//   .to("#hero" , {
//     backgroundColor :"white"
//   })


    },[])
  return (
    <>
    <section id="hero" className='noisy'>
       <h1 className='title'>iBook</h1>
       <img src={leftImage} alt="left-img" className='left-leaf' />
       <img src={rightImage} alt="left-img" className='right-leaf' />
       <div className="body">
        <div className="content">
            <div className="space-y-5 hidden md:block">
                    <p>Cool. Crisp. Classic.</p>
                    <p className="subtitle">
                        Sip the Spirit <br/> of summer
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
    </>
  )
}

export default Hero