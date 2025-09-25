import React from "react";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import {  serviceLists, extraServiceLists, } from "../constants/index";
import leftLeaf from "../images/cocktail-left-leaf.png";
import rightLeaf from "../images/cocktail-right-leaf.png";

const Books = () => {
  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
     scrollTrigger: {
      trigger: '#cocktails',
      start: 'top 30%',
      end: 'bottom 80%',
      scrub: true,
     }
    })
    
    parallaxTimeline
     .from('#c-left-leaf', {
      x: -100, y: 100
    })
     .from('#c-right-leaf', {
      x: 100, y: 100
    })
   })
  return (
    <section id="PopularServices" className="noisy">
      <img src={leftLeaf} alt="l-leaf" id="c-left-leaf" />
      <img src={rightLeaf} alt="r-leaf" id="c-right-leaf" />
      <div className="list">
        <div className="popular">
          <h2>Most Popular Services:</h2>

          <ul>
            {serviceLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="md:me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="loved">
          <h2> Most Loved Services:</h2>

          <ul>
            {extraServiceLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Books;
