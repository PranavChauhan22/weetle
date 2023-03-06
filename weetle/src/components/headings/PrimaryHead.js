import React from "react";
import "./Headings.css";
function PrimaryHead(prop) {
  return (
    <div className="primary_heading">
      <div className="make_extra_bold">{prop.name}</div>
    </div>
  );
}

export default PrimaryHead;
