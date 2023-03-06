import React from "react";
import "./Accordian.css";
function Accordian(prop) {
  return (
    <div className="accordian">
      <details className={prop.type==="primary"?"accordian_wrap":"accordian_wrap_secondary"}>
        <summary className="accordian_head">{prop.head}</summary>
        <p className={prop.type==="primary"?"accordian_body":"accordian_body_secondary"}>{prop.body}</p>
      </details>
    </div>
  );
}

export default Accordian;
