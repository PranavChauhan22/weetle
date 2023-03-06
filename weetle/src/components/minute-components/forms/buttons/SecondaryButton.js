import React from 'react'
import "./Button.css"
function SecondaryButton(prop) {
  return (
    <div className='button_component_secondary'>
        {prop.name}
    </div>
  )
}

export default SecondaryButton