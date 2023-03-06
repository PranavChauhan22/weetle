import React from "react";
import "./Input.css";
import {HiOutlineMail} from 'react-icons/hi'
function Email() {
  return (
    <div className="email">
        <HiOutlineMail className="icon_email"/>
      <input type="email" id="email" name="email" placeholder="Email" className="input_field_email"/>
    </div>
  );
}

export default Email;
