import React from "react";
import "./Input.css"
function Input(prop) {
  return (
    <div className="input">
      <input type={"text"} id={prop.id} placeholder={prop.name} className="input_field_text"/>
    </div>
  );
}

export default Input;
