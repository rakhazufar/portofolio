import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

export default function Cards({ image, title, caption, link }) {
  return (
    <a href={link} style={{ textDecoration: "none" }}>
      <div className="card">
        <img src={image} alt="" />
        <div className="caption-card">
          <h2>{title}</h2>
          <p>{caption}</p>
          <div className="link">
            <BsArrowUpRight />
          </div>
        </div>
      </div>
    </a>
  );
}
