import React from 'react'
import "./cards.css"
function Secondary(prop) {
  return (
    <div className="card_service">
    <div className="card_service_head">{prop.header}</div>
    <div className="card_service_body">
      {prop.body}
    </div>
  </div>
  )
}

export default Secondary