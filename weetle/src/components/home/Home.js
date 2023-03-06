import React from 'react'
import "./Home.css"
import img from "../images/home/primary.png"
function Home(prop) {
  return (
    <div className='home'>
        <div className='home_left_section'>
            <div className='home_left_section_header'>
                <div className='make_extra_bold'>

                {prop.company_name}
                </div>
                </div>
            <div className='home_left_section_body'>{prop.about_company}</div>
            <div className='primary_btn make_center_align'>Explore</div>
        </div>
        <div className='home_right_section'>
            <img src={img} className="home_right_section_image"/>
        </div>
    </div>
  )
}

export default Home