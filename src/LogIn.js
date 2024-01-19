import React, { useState } from "react";
import "./LogIn.css";

export default function LogIn() {
  const [formData, setFormData] = useState({ firstName: "", password: "" });
  const [submitInfo, setSubmitInfo] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function handleChange(e) {
    const [name, value] = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const { firstName, password } = formData;

    if (firstName && password) {
      setSubmitInfo(true);
    } else {
      let errorMessage = "Please provide the following information:\n";

      if (!firstName) {
        errorMessage += "-First Name\n";
      }

      if (!password) {
        errorMessage += "-Password\n";
      }

      alert(errorMessage);
    }
  }

  return (
    <div className="LogIn">
      <h1 className="mt-5">Log In</h1>
      {submitInfo && <p>Information submitted successfully</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          id="firstName"
          className="mb-2 form-control"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          id="passwordInput"
          className="mb-1 form-control"
          value={formData.password}
          onChange={handleChange}
        />
        {showPassword ? (
          <i class="fa-solid fa-eye fa-shake"></i>
        ) : (
          <i class="fa-solid fa-eye-slash fa-beat"></i>
        )}
        <button type="submit" className="btn btn-warning form-control">
          Submit
        </button>
      </form>
    </div>
  );
}
