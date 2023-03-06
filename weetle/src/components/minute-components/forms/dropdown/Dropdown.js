import React from "react";
import "./Dropdown.css";
function Dropdown() {
const arr=["evolve","youth","corporate","academia"]
  return (
    <div className="dropdown">
      <select name="dropdown_names" id="dropdown_names" className="dropdown_keys">
        {arr.map(e=>{
            return <option value={e} className="dropdown_values">{e}</option>
        })}
      </select>
    </div>
  );
}

export default Dropdown;
