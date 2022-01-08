import React from "react";
import Photo from "../../assets/images/photo.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <img src={Photo} alt="" />
      <div className="container-text">
        <h1>I'm Rakha Zufar.</h1>
        <h1>A Front-end Developer</h1>
        <h2>based in Indonesia.</h2>
        <p>
          I am a passionate front-end developer. If you have a great project
          that need a great front-end skill, I'm your guy.
        </p>
      </div>
      <div className="back-right"></div>
    </section>
  );
}
