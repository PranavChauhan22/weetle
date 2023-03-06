import React from "react";
import "./Headings.css"
function SecondaryHead(prop) {
  return (
    <div className="secondary_heading">
      <div className="make_extra_bold">{prop.name}</div>
    </div>
  );
}

export default SecondaryHead;
