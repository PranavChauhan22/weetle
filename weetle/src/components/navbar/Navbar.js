import React from "react";
import "./Navbar.css";

function Navbar(props) {
  return (
    <div className="nav_wrapper">
      <div
        className={
          props.type === "primary"
            ? "navbar navbar_black"
            : "navbar navbar_grey"
        }
      >
        <div className="navbar_left_section">
          <div className="navbar_left_section_logo">
            <img src={props.url} className="navbar_left_section_logo_img" />
          </div>
        </div>
        <div className="navbar_right_section">
          <div className="navbar_right_section_text">Home</div>
          <div className="navbar_right_section_text">Services</div>
          <div className="navbar_right_section_text">Contact</div>
          <div className="navbar_right_section_text">Footer</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
