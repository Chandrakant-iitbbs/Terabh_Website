import React, { useState } from "react";

const Contact = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const onchangeHandle = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "https://appbackend.terabh.com/auth/signup";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: info.email,
      }),
    });
   
  };
  return (
    <div className="contact" id="contact">
      <div className="cls">
        <h2 className="title">Contact</h2>
        <div className="align-items-center d-flex flex-column">
          <input
            type="text"
            className="d-block"
            id="name"
            value={info.name}
            name="name"
            onChange={onchangeHandle}
            placeholder="Name:"
          />
          <input
            type="email"
            className="d-block"
            id="email"
            value={info.email}
            name="email"
            onChange={onchangeHandle}
            placeholder="Email:"
          />
          <input
            type="text"
            className="d-block"
            id="number"
            value={info.number}
            name="number"
            onChange={onchangeHandle}
            placeholder="Number:"
          />
          <input
            type="text"
            className="d-block"
            id="message"
            value={info.message}
            name="message"
            onChange={onchangeHandle}
            placeholder="Message: (Optional)"
          />
          <button type="submit" className="btn" onClick={handleSubmit}>Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
