import React from "react";
import "./About.css";
import theme_patter from "../../assets/theme_pattern.svg";
import about_profile from "../../assets/about_profile.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>Sobre mí</h1>
        <img src={theme_patter} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img style={{ borderRadius: "15px" }} src={about_profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Mi experiencia consectetur adipisicing elit. Vero, deleniti magni!
              Exercitationem autem accusamus incidunt doloribus cupiditate
              ratione neque vitae magnam commodi consequuntur ea facilis nam
              minima nesciunt, fugiat quasi.
            </p>
            <p>
              Mi pasión por el desarrollo web amet consectetur adipisicing elit.
              Ducimus sequi neque hic perferendis vel saepe dicta accusamus,
              expedita atque quibusdam excepturi voluptates, corrupti, dolor rem
              quis harum sunt veritatis odio!
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Java</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>SpringBoot</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-achievements">
              <div className="about-achievement">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
