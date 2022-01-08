import React, { useState } from "react";
import Card from "../Cards/Cards";
import Display from "../../assets/images/cookholic.png";
import Parallax from "../../assets/images/parallax.png";
import Slicing from "../../assets/images/slicing.png";
import ButtonProject from "../Button/Button";

export default function Projects() {
  const [cardsLeft, setCardsLeft] = useState([
    {
      image: Display,
      title: "Cookholic",
      caption:
        "Cookholic is a webapp for search recipe. Cookholic using spooncular API.",
      link: "https://cookholic.netlify.app",
    },
    {
      image: Parallax,
      title: "Travel.co (Parallax)",
      caption:
        "This is my first website that implement parallax, i used HTML, CSS, and JS",
      link: "https://parallax-rakha.netlify.app/#",
    },
  ]);
  const [cardsRight, setCardsRight] = useState([
    {
      image: Slicing,
      title: "Slicing Project",
      caption: "I made this web because I bored",
      link: "slicingproject.netlify.app",
    },
    {
      image: Parallax,
      title: "Travel.co (Parallax)",
      caption:
        "This is my first website that implement parallax, i used HTML, CSS, and JS",
      link: "https://parallax-rakha.netlify.app/#",
    },
  ]);

  return (
    <section className="projects" id="projects">
      <div className="project-left">
        <h1>MY PROJECTS</h1>
        <h2>Work that I have done in past</h2>
        <div className="Cards-container">
          {cardsLeft.map((card) => (
            <Card {...card} />
          ))}
        </div>
      </div>
      <div className="project-right">
        {cardsRight.map((card) => (
          <Card {...card} />
        ))}
        <div className="buttonShowMore">
          <ButtonProject text="VIEW ALL PROJECT" />
        </div>
      </div>
    </section>
  );
}
