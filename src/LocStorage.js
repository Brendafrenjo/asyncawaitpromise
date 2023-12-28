import React from "react";
import "./LocStorage.css";

export default function LocStorage() {
  return (
    <div>
      <form>
        <input type="text" className="form-control info-form" />
        <select
          class="custom-select my-1 mr-sm-2"
          id="inlineFormCustomSelectPref"
        >
          <option selected>Student age</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <input type="text" />
      </form>
    </div>
  );
}
