import React, { useState } from "react";

export default function LogInForm() {
  const [formData, setFormData] = useState({ firstName: "", password: "" });
  const [formInfo, setFormInfo] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit() {
    if (formData.firstName && formData.password) {
      setFormInfo(true);
    } else {
      alert("Provide all relevant information");
    }
  }

  return (
    <div>
      <h1>Log In Form</h1>
      {formInfo && "Information Sucessfully submitted"}
      <form onSubmit={handleSubmit}>
        <input
          type="firstName"
          id="firstName"
          className="firstName form-control"
          onClick={handleChange}
          value={formData.firstName}
        />
        <input
          type="password"
          id="passwordInput"
          className="passwordInput form-control"
          onClick={handleChange}
          value={formData.password}
        />
        <input type="checkbox" id="checkBox" />
        <label htmlFor="checkBox">Show Password</label>
      </form>
    </div>
  );
}
