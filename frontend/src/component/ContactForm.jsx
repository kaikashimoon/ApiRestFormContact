import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, number, text} = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      number: number.value,
      text: text.value
    };
    let response = await fetch("http://localhost:5000/v1/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.message);
  };
  return (

    <section className='form'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
      </div>
      <div>
        <label htmlFor="number">Number:</label>
        <textarea type="number" id="number" required />
      </div>
      <div>
        <label htmlFor="text">Text:</label>
        <textarea type="text" id="text" required />
      </div>
        </div>
        <div className='form-group'>
        <button className='btn btn-block' type="submit">{status}</button>
        </div>
      </form>
    </section>

  );
};

export default ContactForm;