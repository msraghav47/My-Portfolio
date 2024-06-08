import React, { useEffect, useRef } from "react";
import pdf from "../pdf/Resume.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js";
const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "I am Mohit Kumar",
        "I am Software Develover",
        "I am FrontEnd Developer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container home" id="home">
      <center>
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>
          <a href={pdf} download="Mohit_Resume.pdf" className="btn btn-primary">
            Download Resume
          </a>
        </div>
      </center>
      <div className="right" data-aos="fade-up-left" data-aos-duration="1000">
        <div className="image">
          <img src={`/assets/${hero.imgSrc}`} alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default Home;
