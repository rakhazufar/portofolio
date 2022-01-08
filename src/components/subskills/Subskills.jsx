import React, { useState, useEffect } from "react";
import Bootstrap from "../../assets/images/bootstrap.svg";
import Scss from "../../assets/images/scss.png";
import Redux from "../../assets/images/redux.png";
import MaterialUI from "../../assets/images/materialUI.png";
import Jest from "../../assets/images/jest.png";
import ReactTesting from "../../assets/images/reactTesting.png";

export default function Subskills() {
  const [mousePosition, setMousePosition] = useState();
  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      setMousePosition(event.clientX);
    });
  }, []);

  return (
    <div
      className="sub-skills"
      style={{ marginLeft: mousePosition / -27.3 + "vw" }}
    >
      <div className="bootstrap">
        <img src={Bootstrap} alt="" />
      </div>
      <div className="scss">
        <img src={Scss} alt="" />
      </div>
      <div className="redux">
        <img src={Redux} alt="" />
      </div>
      <div className="materialUI">
        <img src={MaterialUI} alt="" />
      </div>
      <div className="Jest">
        <img src={Jest} alt="" />
      </div>
      <div className="React-testing-library">
        <img src={ReactTesting} alt="" />
      </div>
    </div>
  );
}
