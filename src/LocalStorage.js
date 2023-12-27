import React from "react";
import "./LocalStorage.css";

export default function LocalStorage() {
  return (
    <div>
      <h1>Login Here:</h1>
      <form>
        <label for="firstName">First Name:</label>
        <input
          type="text"
          placeholder="Enter your first name"
          className="form-control info-form"
          onChange={handleChange}
          value={formData.firstName}
          autoFocus="on"
        />
        <label for="lastName">Surname:</label>
        <input
          type="text"
          placeholder="Enter your surname"
          className="form-control info-form"
          onChange={handleChange}
          value={formData.lastName}
        />
        <label for="email">Email:</label>
        <input
          type="text"
          placeholder="name@example.com"
          className="form-control info-form"
          onChange={handleChange}
          value={formData.email}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
        <br />
        <button
          type="submit"
          className="btn btn-success mt-2"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
