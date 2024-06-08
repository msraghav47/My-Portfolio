import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
const Contact = () => {
  return (
    <div className="container contact" id="contact">
      <h1 style={{ textShadow: "2px 2px rgb(255,0,0)" }}>Contact me</h1>
      <div className="contact-icons">
        <a className="items" data-aos="fade-up" data-aos-duration="1000">
          <FaInstagramSquare className="icons" />
        </a>
        <a className="items" data-aos="fade-up" data-aos-duration="1000">
          <FaFacebookSquare className="icons" />
        </a>
        <a
          href="https://www.linkedin.com/in/mohit-kumar-655b0b282"
          target="blank"
          className="items"
          data-aos="fade-up"
          data-aos-duration="1000">
          <FaLinkedin className="icons" />
        </a>
        <a
          href="https://github.com/msraghav47"
          target="blank"
          className="items"
          data-aos="fade-up"
          data-aos-duration="1000">
          <FaGithubSquare className="icons" />
        </a>
        <a className="items" data-aos="fade-up" data-aos-duration="1000">
          <BiLogoGmail className="icons" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
