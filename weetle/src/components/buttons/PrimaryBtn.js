import React from 'react'
import "./Button.css"
function PrimaryBtn(prop) {
  return (
    <div className='primary_button'>{prop.name}</div>
  )
}

export default PrimaryBtn