import './FooterStyles.css'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa';
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='leftFooter'>
        <div className='leftflex'>
          <FaHome size={25} style={{ marginRight: "2rem" }} />
          <p>
            Moharipur Gorakhpur    <br></br>
            Pin: 273007  <br></br>
            Uttar Pradesh.

          </p>
          
          
        </div>
        
        <div className='leftflex'>
          <FaPhone size={25} style={{ marginRight: "2rem" }} />
          <p>7731079114</p>
        </div>
        <div className='leftflex'>
          <FaMailBulk size={25} style={{ marginRight: "2rem" }} />
          <p>akashvishwakarma111111@gmail.com</p>
        </div>
      </div>
      <div className='rightFooter'>
        <div className='rightflex'>
          <h4>Vellore Institute Of Technology Bhopal</h4>

        </div>
        <div className='content'>
          <p>This is me Akash Vishwakarma student of VIT Bhopal . </p>
        </div>
        <div className='rightflex'>

          <FaFacebook size={25} style={{ marginRight: "2rem" }} />
          <FaTwitter size={25} style={{ marginRight: "2rem" }} />
          <FaLinkedin size={25} style={{ marginRight: "2rem" }} />


        </div>
      </div>
    </div>
  )
}

export default Footer