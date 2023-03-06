import React from 'react'
import PrimaryBtn from '../buttons/PrimaryBtn'
import SecondaryBtn from '../buttons/SecondaryBtn'
import PrimaryHead from '../headings/PrimaryHead'
import "./Contact.css"
function Contact(prop) {
  return (
    <div className='contact'>
        <div className='contact_left_section'>
            <PrimaryHead name={"Interested in "+prop.company_name+"?"}/>
            <PrimaryHead name="Contact us."/>
        </div>
        <div className='contact_right_section'>
          <a href={"mailto:"+prop.company_mail_id} style={{textDecoration:"none"}}>

            <PrimaryBtn name="Contact Us"/>
          </a>
            <div className='margin_addition'>
                
            </div>
            <SecondaryBtn name="Get Started"/>
        </div>
    </div>
  )
}

export default Contact