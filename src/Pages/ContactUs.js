import React, { useRef, useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  // Define state variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const ContactData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phoneNumber: phoneRef.current.value,
    };

    const response = await fetch(
      "https://your-cart-e-commerce-app-default-rtdb.firebaseio.com//contactdata.json",
      {
        method: "POST",
        body: JSON.stringify(ContactData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    console.log(data);

    // Clear input fields
    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
  }

  return (
    <div className="contact-us-container"> {/* Add a specific class or ID */}
      <form className="form" onSubmit={handleSubmit}>
        <h1>Contact Us</h1>
        <input
          type="text"
          className="input"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          ref={nameRef}
          required
        />
        <input
          type="email"
          className="input"
          placeholder="Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          ref={emailRef}
          required
        />
        <input
          type="tel"
          className="input"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          ref={phoneRef}
          required
        />
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
