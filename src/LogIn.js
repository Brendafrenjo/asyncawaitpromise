import React, { useState } from "react";

export default function LogIn() {
  const [formData, setFormData] = useState({ firstName: "", password: "" });
  const [submitInfo, setSubmitInfo] = useState(false);

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
    <div onSubmit={handleSubmit}>
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
          type="password"
          name="password"
          id="passwordInput"
          className="mb-1 form-control"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-warning form-control">
          Submit
        </button>
      </form>
    </div>
  );
}
