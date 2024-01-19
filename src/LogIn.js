import React, { useState } from "react";
import "./LogIn.css";

export default function LogIn() {
  const [formData, setFormData] = useState({
    firstName: "",
    password: "",
    showPassword: false,
  });
  const [submitInfo, setSubmitInfo] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit() {
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

  function toggleVisibilityChange() {
    setFormData({ ...formData, showPassword: !formData.showPassword });
  }

  return (
    <div className="LogIn">
      <h1 className="mt-5">Log In</h1>
      {submitInfo && <p>Information submitted successfully</p>}
      <form>
        <input
          type="text"
          name="firstName"
          id="firstName"
          className="mb-2 form-control"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type={formData.showPassword ? "text" : "password"}
          name="password"
          id="passwordInput"
          className="mb-1 form-control"
          value={formData.password}
          onChange={handleChange}
        />
        <span
          className={`password-toggle-icon ${
            formData.showPassword ? "visible" : "hidden"
          }`}
          onClick={toggleVisibilityChange}
        >
          {formData.showPassword ? (
            <>
              <i className="fa-solid fa-eye fa-shake"></i>
              <span className="ms-2">Hide password</span>
            </>
          ) : (
            <>
              <i className="fa-solid fa-eye-slash fa-beat"></i>
              <span className="ms-2">Show password</span>
            </>
          )}
        </span>
        <button
          type="submit"
          className="btn btn-warning form-control mt-2"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
