import React from "react";
import HTML from "../../assets/images/html.png";
import REACT from "../../assets/images/react.png";
import NODE from "../../assets/images/node.png";

export default function About() {
  return (
    <section className="skills-section" id="skillset">
      <h1>SKILLSET</h1>
      <h2>MY SKILLS AND TOOLS THAT I USED FOR DEVELOPMENT</h2>
      <div className="skills-container">
        <div className="first">
          <img src={HTML} alt="" />
          <h3>HTML & CSS</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            veritatis eius voluptates eligendi ipsa est voluptas nesciunt illo.
          </p>
        </div>
        <div className="second">
          <img src={REACT} alt="" />
          <h3>ReactJS</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            veritatis eius voluptates eligendi ipsa est voluptas nesciunt illo.
          </p>
        </div>

        <div className="third">
          <img src={NODE} alt="" />
          <h3>NodeJS</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            veritatis eius voluptates eligendi ipsa est voluptas nesciunt illo.
          </p>
        </div>
      </div>
    </section>
  );
}
