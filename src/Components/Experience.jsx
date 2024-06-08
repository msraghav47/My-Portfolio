import React from "react";
import experience from "./data/experience.json";
const Experience = () => {
  return (
    <div className="container ex" id="expe">
      <h1>Experience</h1>
      <center>
        {experience.map((data) => {
          return (
            <div
              key={data.id}
              className="ex-item text-center my-5"
              data-aos="zoom-in"
              data-aos-duration="1000">
              <div className="left">
                <img src={`/assets/${data.imageSrc}`} alt="" />
              </div>
              <div className="right">
                <h2
                  style={{
                    color: "red",
                  }}>
                  {data.role}
                </h2>
                <h3>
                  <span
                    style={{
                      color: "yellowgreen",
                    }}>
                    {data.organisation}, {data.location}
                  </span>
                </h3>
                <h4>
                  {data.startDate} {data.endDate}
                </h4>
                {data.experiences.map((i) => (
                  <h5 key={i}>{i}</h5>
                ))}
              </div>
            </div>
          );
        })}
      </center>
    </div>
  );
};
export default Experience;
