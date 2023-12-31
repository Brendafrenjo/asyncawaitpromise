import React, { useState, useEffect } from "react";
import "./LocalStorage.css";

export default function LocalStorage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    roll: "",
  });

  // Load data from localStorage on component mount
  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

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
      formData.email.trim() === "" ||
      formData.age.trim() === "" ||
      formData.roll.trim() === ""
    ) {
      alert("All fields are required");
      return;
    }

    // Save data to localStorage
    localStorage.setItem("formData", JSON.stringify(formData));

    console.log("Information submitted:", formData);
    console.log(localStorage);

    // Set the entire form data as the message

    // Clear form data after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      age: "",
      roll: "",
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
          className="form-control info-form text-center"
          onChange={handleChange}
          value={formData.firstName}
        />
        <label htmlFor="lastName">Surname:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Enter your surname"
          className="form-control info-form text-center"
          onChange={handleChange}
          value={formData.lastName}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="name@example.com"
          className="form-control info-form text-center"
          onChange={handleChange}
          value={formData.email}
        />
        <small id="emailHelp" className="form-text text-muted text-center">
          We'll never share your email with anyone else.
        </small>
        <br />
        <label htmlFor="email">Age:</label>
        <select
          className="custom-select my-1 mr-sm-2 form-control info-form text-center"
          id="age"
          name="age"
          onChange={handleChange}
          value={formData.age}
        >
          <option selected>Student age</option>
          {Array.from({ length: 101 }, (_, index) => (
            <option key={index} value={index + 0}>
              {index + 0}
            </option>
          ))}
        </select>
        <label htmlFor="email">Roll Number:</label>
        <input
          type="number"
          id="roll"
          name="roll"
          placeholder="Student's roll"
          className="form-control info-form text-center"
          onChange={handleChange}
          value={formData.roll}
        />
        <button type="submit" className="btn btn-success mt-2">
          Add Student
        </button>
      </form>
      <div className="student"></div>
      <br />
      <br />
    </div>
  );
}
