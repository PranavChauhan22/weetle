import React from 'react'
import SecondaryBtn from '../buttons/SecondaryBtn'
import TertiaryBtn from '../buttons/TertiaryBtn'
import "./Footer.css"
import {AiFillInstagram} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
function Footer(prop) {
  return (
    <>
    <div className='footer'>
        <div className='footer_top_layer'>
        <div className='footer_left_section'>
            <div className='capsule_head'>
                Email us
            </div>
            <div className='capsule_body'>
                {prop.email}
            </div>
        </div>
        <div className='footer_mid_section'>
        <div className='capsule_head'>
                Contact us
            </div>
            <div className='capsule_body'>
                {prop.contact}
            </div>
        </div>
        <div className='footer_right_section'>
        <div className='capsule_head'>
                Let's talk
            </div>
            <div className='capsule_body margin-top'>
                <a href={"mailto:"+prop.email} style={{textDecoration:"none"}}>

                <TertiaryBtn name="Start a conversation"/>
                </a>
            </div>
            <div className='icons_wrapper'>
                <a href={prop.instagramlink} style={{color:"black"}} target={"_blank"}>

                <AiFillInstagram className='icon'/>
                </a>
                <a href={prop.linkedinlink} style={{color:"black"}} target={"_blank"}>

                <FaLinkedinIn className='icon'/>
                </a>
                <a href={prop.twitterlink} style={{color:"black"}} target={"_blank"}>

                <BsTwitter className='icon'/>
                </a>
            </div>
        </div>
        </div>
        <div className='footer_bottom_layer'>
            <div className='capsule_head margin-addition'>Privacy notice</div>
            <div className='capsule_head margin-addition'>Terms of use</div>
            <div className='capsule_head margin-addition'>Powered by aesthetico.</div>
         </div>
    </div>
    <div className='capsule_head bottom_liner'>
        Designed & Developed by EVOLVE | © Copyright 2023
    </div>
    </>
  )
}

export default Footer