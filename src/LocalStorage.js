import React, { useState } from "react";
import "./LocalStorage.css";

export default function LocalStorage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (
      formData.firstName.trim() === "" ||
      formData.lastName.trim() === "" ||
      formData.email.trim() === ""
    ) {
      alert("All fields are required");
      return;
    }
    console.log("Form data submitted:", formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
    });
  }

  return (
    <div>
      <h1>Login Here:</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Enter your first name"
          className="form-control info-form"
          onChange={handleChange}
          value={formData.firstName}
        />
        <label htmlFor="lastName">Surname:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Enter your surname"
          className="form-control info-form"
          onChange={handleChange}
          value={formData.lastName}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="name@example.com"
          className="form-control info-form"
          onChange={handleChange}
          value={formData.email}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
        <br />
        <button type="submit" className="btn btn-success mt-2">
          Submit
        </button>
      </form>
    </div>
  );
}
