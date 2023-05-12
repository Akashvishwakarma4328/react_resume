import React from 'react'
import NavbarMenu from "../component/NavbarMenu";
import Footer from "../component/Footer";
import HeroimageProject from "../component/HeroimageProject";
import ContactHaome from "../component/ContactHaome";
const Contact = () => {
  return (
    <div>
      <NavbarMenu/>
      <HeroimageProject  Heading = "CONTACT" Text = "Lets have chat"/>
      <ContactHaome/>
      <Footer/>
    </div>
  )
}

export default Contact