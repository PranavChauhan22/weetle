import React from "react";
import "./Input.css";
function File(prop) {
  return (
    <div className="file">
      <input
        type={"file"}
        id={prop.id}
        className="input_field_file"
      />
    </div>
  );
}

export default File;
