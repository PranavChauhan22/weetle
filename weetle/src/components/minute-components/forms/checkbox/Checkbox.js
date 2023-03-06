import React from "react";
import "./Checkbox.css";
function Checkbox() {
  return (
    <form action="" className="checkboxes">
      <label class="form-control">
        <input type="checkbox" name="checkbox" />
      </label>

      <label class="form-control">
        <input type="checkbox" name="checkbox-checked" checked />
      </label>

      <label class="form-control form-control--disabled">
        <input type="checkbox" name="checkbox-disabled" disabled />
      </label>

      <label class="form-control form-control--disabled">
        <input
          type="checkbox"
          name="checkbox-disabled-checked"
          checked
          disabled
        />
      </label>
    </form>
  );
}

export default Checkbox;
