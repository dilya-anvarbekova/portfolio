import React from "react";
import {Data} from "./Data";
import {Card} from "./Card";

export const Resume = () => {
  return (
    <section className="resume container section" id="experience">
      <h2 className="section__title">Experience</h2>

      <div className="resume__container grid">
        <div className="timeline grid">
          {Data.map((val, index) => {
            if (val.category === "experience") {
              return (
                <Card
                  key={index}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  role={val.role}
                  location={val.location}
                  desc={val.desc}
                />
              );
            }
          })}
        </div>

        <div className="timeline grid">
          {Data.map((val, index) => {
            if (val.category === "project") {
              return (
                <Card
                  key={index}
                  icon={val.icon}
                  year={val.year}
                  title={val.title}
                  desc={val.desc}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};