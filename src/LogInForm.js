import React from "react";

export default function LogInForm() {
  return (
    <div>
      <h1>Log In Form</h1>
      <form>
        <input
          type="firstName"
          id="firstName"
          className="firstName form-control"
        />
        <input
          type="password"
          id="passwordInput"
          className="passwordInput form-control"
        />
        <input type="checkbox" id="checkBox" />
        <label htmlFor="checkBox">Show Password</label>
      </form>
    </div>
  );
}
