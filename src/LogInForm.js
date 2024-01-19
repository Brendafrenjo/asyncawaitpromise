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
    setShowPassword(!showPassword);
  }

  return (
    <div className="LogInForm">
      <h1 className="mt-5">Log In Form</h1>
      {formInfo && <p>Information Successfully submitted</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          id="firstName"
          className="firstName form-control mb-2"
          onChange={handleChange}
          value={formData.firstName}
        />
        <input
          type={showPassword ? "text" : "password"}
          name="password"
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
        <button
          type="submit"
          className="btn btn-success form-control mt-2 mb-5"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
