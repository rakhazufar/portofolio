import React from "react";
import Button from "../Button/Button";

export default function Contact() {
  return (
    <div className="contactSection" id="contact">
      <div className="contactText">
        <h2>Contact Me</h2>
        <p>
          If you intersted to work with me, don't hasitate to send me a massage
        </p>
        {/* <img src={ContactImage} alt="" /> */}
      </div>
      <div className="contactForm">
        <form>
          <h2>Contact Me</h2>

          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
          <label htmlFor="massage">Massage</label>
          <textarea name="massage" id="massage" cols="30" rows="10" />
          <Button text="SEND" type="submit" />
        </form>
      </div>
    </div>
  );
}
