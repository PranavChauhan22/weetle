import React from 'react'
import "./Button.css"
function PrimaryButton(prop) {
  return (
    <div className='button_component_primary'>
        {prop.name}
    </div>
  )
}

export default PrimaryButton