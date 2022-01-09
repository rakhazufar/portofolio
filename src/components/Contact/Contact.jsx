import React from "react";
import Button from "../Button/Button";
import {
  AiOutlineWhatsApp,
  AiOutlineInstagram,
  AiOutlineGithub,
} from "react-icons/ai";

export default function Contact() {
  return (
    <div className="contactSection" id="contact">
      <div className="contactText">
        <h2>Contact Me</h2>
        <p>
          If you intersted to work with me, don't hasitate to send me a massage
        </p>
        <div className="sosial-media">
          <a
            href="https://api.whatsapp.com/send/?phone=6289639143290"
            className="whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineWhatsApp />
          </a>
          <a
            className="instagram"
            href="https://www.instagram.com/rakhazufar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineInstagram />
          </a>
          <a
            href="https://github.com/rakhazufar"
            className="github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineGithub />
          </a>
        </div>
      </div>
      <div className="contactForm">
        <form>
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
