import React from 'react'
import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import slideleftleaf from "../images/slider-left-leaf.png"
import sliderightleaf from "../images/slider-right-leaf.png"
import rightarrow from "../images/right-arrow.png"
import leftarrow from "../images/left-arrow.png"
import gsap from 'gsap';
import plane from "../images/aeroplane-147495_640.png"
import hotel from "../images/apartment-48821_640.png"
import resturant from "../images/taxi-47204_640.png"
import lake from "../images/waterfall-310140_640.png"

const BookingServices = () => {
    const contentRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    const plans = [
      {
        id: 1,
        name: "Available Flight Tickets",
        image: plane,
        title: "Seamless Flights to Your Destination",
        description:
          "Book affordable and reliable flight tickets to your dream destinations. Travel stress-free with flexible options and smooth connections.",
      },
      {
        id: 2,
        name: "An Affordable Luxurious Hotel",
        image: hotel,
        title: "Stay in Comfort & Luxury",
        description:
          "Discover hotels that combine affordability with elegance. Enjoy modern amenities, comfort, and world-class service wherever you go.",
      },
      {
        id: 3,
        name: "Your Destination Driver",
        image: resturant,
        title: "Ride with Ease Anywhere",
        description:
          "Book trusted local drivers to take you around safely and on time. Whether it’s sightseeing, airport pickups, or daily commutes—we’ve got you covered.",
      },
      {
        id: 4,
        name: "Breath Taking Water Fall",
        image: lake,
        title: "Unforgettable Natural Wonders",
        description:
          "Explore breathtaking waterfalls and stunning landscapes. Create memories surrounded by nature’s most beautiful and awe-inspiring views.",
      },
    ];
    
    
    useGSAP(() => {
       gsap.fromTo('#title', { opacity: 0 }, { opacity: 1, duration: 1 });
       gsap.fromTo('.cocktail img', { opacity: 0, xPercent: -100 }, {
        xPercent: 0, opacity: 1, duration: 1, ease: 'power1.inOut'
       })
       gsap.fromTo('.details h2', { yPercent: 100, opacity: 0 }, {
        yPercent: 0, opacity: 100, ease: 'power1.inOut'
       })
       gsap.fromTo('.details p', { yPercent: 100, opacity: 0 }, {
        yPercent: 0, opacity: 100, ease: 'power1.inOut'
       })
    }, [currentIndex]);
    
    const totalCocktails =  plans.length;
    
    const goToSlide = (index) => {
       const newIndex = (index + totalCocktails) % totalCocktails;
       
       setCurrentIndex(newIndex);
    }
    
    const getCocktailAt = (indexOffset) => {
       return  plans[(currentIndex + indexOffset + totalCocktails) % totalCocktails]
    }
    
    const currentCocktail = getCocktailAt(0);
    const prevCocktail = getCocktailAt(-1);
    const nextCocktail = getCocktailAt(1);
  return (
    <section id="menu" aria-labelledby="menu-heading">
    <img src={slideleftleaf} alt="left-leaf" id="m-left-leaf" />
    <img src={sliderightleaf} alt="right-leaf" id="m-right-leaf" />
    
    <h2 id="menu-heading" className="sr-only">
       Cocktail Menu
    </h2>
    
    <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
       { plans.map((cocktail, index) => {
        const isActive = index === currentIndex;
        
        return (
           <button key={cocktail.id} className={`
               ${isActive
                ? 'text-white border-white'
                : 'text-white/50 border-white/50'}
            `}	onClick={() => goToSlide(index)}
           >
            {cocktail.name}
           </button>
        )
       })}
    </nav>
    
    <div className="content">
       <div className="arrows">
        <button className="text-left" onClick={() => goToSlide(currentIndex - 1)}>
           <span>{prevCocktail.name}</span>
           <img src={rightarrow} alt="right-arrow" aria-hidden="true" />
        </button>
        
        <button className="text-left" onClick={() => goToSlide(currentIndex + 1)}>
           <span>{nextCocktail.name}</span>
           <img src={leftarrow} alt="left-arrow" aria-hidden="true" />
        </button>
       </div>
       
       <div className="cocktail">
        <img src={currentCocktail.image} className="object-contain"/>
       </div>
       
       <div className="recipe">
        <div ref={contentRef} className="info">
           <p>Recipe for:</p>
           <p id="title">{currentCocktail.name}</p>
        </div>
        
        <div className="details">
           <h2>{currentCocktail.title}</h2>
           <p>{currentCocktail.description}</p>
        </div>
       </div>
    </div>
   </section>
  )
}

export default BookingServices