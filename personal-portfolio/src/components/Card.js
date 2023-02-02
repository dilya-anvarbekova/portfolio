import React from "react";

export const Card = (props) => {
  return (
    <div className="timeline__item">
      <i className={props.icon}></i>
      <span className="timeline__date">{props.year}</span>
      <h3 className="timeline__title">{props.title}</h3>
      <h5 className="timeline__role">{props.role}</h5>
      <p className="timeline__location">{props.location}</p>
      <p className="timeline__text">{props.desc}</p>
    </div>
  );
};

