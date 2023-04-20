import React from 'react'
import NavbarMenu from '../component/NavbarMenu'
import Footer from '../component/Footer'
import HeroimageProject from '../component/HeroimageProject'

const Internship = () => {
  return (
    <div>
        <NavbarMenu/>
        <HeroimageProject Heading = "Internship" Text = "These are my Internshpis i have done"/>
        <Footer/>
    </div>
  )
}

export default Internship