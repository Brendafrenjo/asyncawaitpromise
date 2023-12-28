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
          {Array.from({ length: 36 }, (_, index) => (
            <option key={index} value={index + 15}>
              {index + 15}
            </option>
          ))}
        </select>
        <input type="text" />
      </form>
    </div>
  );
}
