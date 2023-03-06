import React from 'react'
import "./Image.css"
function Image(prop) {
  return (
    <div className='image'>
        <img src={prop.url} className={prop.bnw?"image_style bnw":"image_style"} height={prop.height}/>
    </div>
  )
}

export default Image