import React, { useState } from "react";
import "./LogInForm.css";

export default function LogInForm() {
  const [formData, setFormData] = useState({ firstName: "", password: "" });
  const [formInfo, setFormInfo] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.firstName && formData.password) {
      setFormInfo(true);
    } else {
      alert("Provide all relevant information");
    }
  }

  function toggleVisibilityChange() {
    setShowPassword(true);
  }

  return (
    <div className="LogInForm">
      <h1>Log In Form</h1>
      {formInfo && "Information Sucessfully submitted"}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="firstName"
          className="firstName form-control mb-2"
          onChange={handleChange}
          value={formData.firstName}
        />
        <input
          type={showPassword ? "text" : "password"}
          id="passwordInput"
          className="passwordInput form-control mb-2"
          onChange={handleChange}
          value={formData.password}
        />
        <input
          type="checkbox"
          id="toggleVisibility"
          onChange={toggleVisibilityChange}
        />
        <label htmlFor="toggleVisibility" className="ms-1">
          Show Password
        </label>
      </form>
    </div>
  );
}
