import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img className="profile-img" src={profile_img} alt="" />
      <h1>
        <span>Soy Juan Carlos,</span> desarrollador junior fullstack
      </h1>
      <p>Soy un desarrollador web de Barcelona</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Conecta conmigo
          </AnchorLink>
        </div>
        <div className="hero-resume">Mi CV</div>
      </div>
    </div>
  );
};

export default Hero;
