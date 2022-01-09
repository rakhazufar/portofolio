import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import Alert from "react-bootstrap/Alert";
import {
  AiOutlineWhatsApp,
  AiOutlineInstagram,
  AiOutlineGithub,
} from "react-icons/ai";
import { db } from "../config/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

export default function Contact() {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [showResponse, setShowResponse] = useState(false);
  const [showError, setShowError] = useState(false);
  const [data, setData] = useState([]);
  const dataColletion = collection(db, "message");

  const addMessage = async (e) => {
    try {
      e.preventDefault();
      await addDoc(dataColletion, {
        name: newName,
        email: newEmail,
        message: newMessage,
      });
      setNewName("");
      setNewEmail("");
      setNewMessage("");
      setShowResponse(true);
    } catch (err) {
      console.log(err);
      showError(true);
    }
  };

  useEffect(() => {
    const dataForm = async () => {
      const message = await getDocs(dataColletion);
      setData(message.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    dataForm();
  }, []);

  return (
    <div className="contactSection" id="contact">
      <div className="contactText">
        <h2>Contact Me</h2>
        <p>
          If you intersted to work with me, don't hasitate to send me a massage
        </p>

        {/* {data.map((message) => (
          <div>
            <p>{message.name}</p>
            <p>{message.email}</p>
            <p>{message.message}</p>
          </div>
        ))} */}
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
        <form onSubmit={addMessage}>
          {showResponse && (
            <Alert variant="success" className="alert">
              Thanks for sending me a message, I'll reply ur message in 24 hours
            </Alert>
          )}
          {showError && (
            <Alert variant="error" className="alert">
              Something went wrong
            </Alert>
          )}
          <label htmlFor="name">Name</label>
          <input
            type="text"
            required
            onChange={(event) => setNewName(event.target.value)}
            value={newName}
            id="name"
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            required
            onChange={(event) => setNewEmail(event.target.value)}
            id="email"
            value={newEmail}
          />
          <label htmlFor="massage">Massage</label>
          <textarea
            name="massage"
            required
            onChange={(event) => setNewMessage(event.target.value)}
            id="massage"
            cols="30"
            rows="10"
            value={newMessage}
          />
          <Button text="SEND" type="submit" />
        </form>
      </div>
    </div>
  );
}
