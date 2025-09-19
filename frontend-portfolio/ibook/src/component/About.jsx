import React from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import abt1 from "../images/abt1.png";
import abt2 from "../images/abt2.png";
import abt3 from "../images/abt3.png";
import abt4 from "../images/abt4.png";
import abt5 from "../images/abt5.png";

const About = () => {
  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-6">
            <p className="badge">Best Cocktails</p>
            <h2>
              Where every detail matters <span className="text-white">-</span>
              from muddle to garnish
            </h2>
          </div>

          <div className="sub-content">
            <p>
              Every cocktail we serve is a reflection of our obsession with
              detail — from the first muddle to the final garnish. That care is
              what turns a simple drink into something truly memorable.
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
          <div className="" />
          <img src={abt1} alt="grid-img-1" />
        </div>

        <div className="md:col-span-6">
          <div className="" />
          <img src={abt2} alt="grid-img-2" />
        </div>

        <div className="md:col-span-3">
          <div className="" />
          <img src={abt5} alt="grid-img-5" />
        </div>
      </div>

      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="" />
          <img src={abt3} alt="grid-img-3" />
        </div>

        <div className="md:col-span-4">
          <div className="" />
          <img src={abt4} alt="grid-img-4" />
        </div>
      </div>
      
    </div>
  );
};

export default About;
