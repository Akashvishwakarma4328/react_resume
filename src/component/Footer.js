import './FooterStyles.css'
import { FaInstagram, FaWhatsapp, FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa';
import React from 'react'
import { Link } from 'react-router-dom';

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

          <Link to="https://wa.me/7731079114" target='_blank'><FaWhatsapp size={25} style={{ marginRight: "2rem", color: "white" }} /></Link>
          <Link to="https://www.facebook.com/akash.s.39982631/" target='_blank'><FaFacebook size={25} style={{ marginRight: "2rem", color: "white" }} /></Link>
          <Link to="https://www.instagram.com/aesthetic_akash_03/" target='_blank'><FaInstagram size={25} style={{ marginRight: "2rem", color: "white" }} /></Link>
          <Link to="https://www.linkedin.com/in/akash-vishwakarma-4b9b55209/" target='_blank'><FaLinkedin size={25} style={{ marginRight: "2rem", color: "white" }} /></Link>


        </div>
      </div>
    </div>
  )
}

export default Footer