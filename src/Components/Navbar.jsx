import React from "react";
import Expand from "./Expand";
const Navbar = () => {
  return (
    <div
      className="container nav_bar"
      data-aos="fade-down"
      data-aos-duration="1000">
      <div className="left">My Portfolio</div>
      <Expand />
      <div className="right">
        <Expand />
        <a href="#home" className="nav_items">
          Home
        </a>
        <a href="#expe" className="nav_items">
          Experience
        </a>
        <a href="#skills" className="nav_items">
          Skills
        </a>
        <a href="#projects" className="nav_items">
          Projects
        </a>
        <a href="#contact" className="nav_items">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Navbar;
