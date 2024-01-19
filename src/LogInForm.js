import React from "react";

export default function LogInForm() {
  const [formData, setFormData] = useState({ firstName: "", password: "" });
  const [formInfo, setFormInfo] = useState(false);

  function handleChange(e) {
    e.preventDefault();
  }

  function handleSubmit() {
    if (firstName && password) {
      setFormInfo(true);
    } else {
      alert("Provide all relevant information");
    }
  }

  return (
    {formInfo && "Information Sucessfully submitted"}
    <div>
      <h1>Log In Form</h1>
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
