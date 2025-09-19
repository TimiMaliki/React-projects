import React, { useRef } from "react";
import car from "../videos/vid1.mp4";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const videoRef = useRef();
  const isSmallDevice = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const heroSplit = new SplitText(".title", {
      type: "chars, words",
    });

    const paragraphsSplit = new SplitText(".subtitle", {
      type: "lines",
    });

    heroSplit.chars.forEach((char) => {
      char.classList.add("text-gradient");
    });

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from(paragraphsSplit.lines, {
      yPercent: 100,
      opacity: 0,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });

    const startVal = isSmallDevice ? "top 50%" : "center 60%";
    const endVal = isSmallDevice ? "120% top" : "bottom top";

    ScrollTrigger.create({
      trigger: videoRef.current,
      start: startVal,
      end: endVal,
      scrub: true,
      pin: true,
      onEnter: () => {
        videoRef.current.play();
      },
      onLeave: () => {
        videoRef.current.play();
      },
      onEnterBack: () => {
        videoRef.current.play();
      },
      onLeaveBack: () => {
        videoRef.current.play();
      },
    });
  }, []);

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

      <div className="video absolute inset-0">
        <video ref={videoRef} muted playsInline preload="auto" src={car} loop />
      </div>
    </>
  );
};

export default Hero;
