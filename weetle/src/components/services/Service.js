import React from "react";
import "./Service.css";
function Service(prop) {
  return (
    <div className="services">
      <div className="service_primary_header">ABOUT US</div>
      <div className="service_secondary_header">
        <div className="make_extra_bold">Why we are best</div>
      </div>
      <div className="service_tertiary_header">
        {prop.header}

      </div>
    </div>
  );
}

export default Service;
