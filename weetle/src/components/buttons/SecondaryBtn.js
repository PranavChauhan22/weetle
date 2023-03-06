import React from 'react'
import "./Button.css"
function SecondaryBtn(prop) {
  return (
    <div className='secondary_button'>{prop.name}</div>
  )
}

export default SecondaryBtn