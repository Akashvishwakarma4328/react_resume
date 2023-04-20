import React from 'react'
import NavbarMenu from "../component/NavbarMenu";
import Footer from "../component/Footer";
import HeroimageProject from "../component/HeroimageProject";
const About = () => {
  return (
    <div>
      <NavbarMenu />
      <HeroimageProject Heading="ABOUT" Text="I am a friendly Full Stack Developer" />
      <Footer/>
   </div>
  )
}

export default About