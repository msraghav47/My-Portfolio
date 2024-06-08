import React from "react";
import skills from "./data/skills.json";
const Skills = () => {
  return (
    <div className="container skills" id="skills">
      <h1>Skills</h1>
      <div className="skills-items">
        {skills.map((data) => (
          <div
            className="skill_item"
            data-aos="flip-right"
            data-aos-duration="1000"
            key={data.title}>
            <img src={`/assets/${data.imageSrc}`} />
            <h1>{data.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
