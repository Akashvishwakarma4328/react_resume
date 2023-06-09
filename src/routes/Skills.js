import React from 'react'
import "./Skills.css";
import NavbarMenu from '../component/NavbarMenu'
import Footer from '../component/Footer'
import HeroimageProject from '../component/HeroimageProject'
const Skills = () => {
    return (
        <div> <NavbarMenu />
            <HeroimageProject Heading="Skills" Text="These are my Skills " />
            <div class="skills_section">
        

        <div class="skills_main">
            <div class="skill_bar">
                <div class="info">
                    <p>HTML</p>
                    <p>90%</p>
                </div>
                <div class="bar">
                    <span class="html"></span>
                </div>
            </div>
            <div class="skill_bar">
                <div class="info">
                    <p>CSS</p>
                    <p>85%</p>
                </div>
                <div class="bar">
                    <span class="css"></span>
                </div>
            </div>
            <div class="skill_bar">
                <div class="info">
                    <p>Java</p>
                    <p>85%</p>
                </div>
                <div class="bar">
                    <span class="sass"></span>
                </div>
            </div>
            <div class="skill_bar">
                <div class="info">
                    <p>Java Script</p>
                    <p>80%</p>
                </div>
                <div class="bar">
                    <span class="js"></span>
                </div>
            </div>
            <div class="skill_bar">
                <div class="info">
                    <p>React js</p>
                    <p>75%</p>
                </div>
                <div class="bar">
                    <span class="react"></span>
                </div>
            </div>
            <div class="skill_bar">
                <div class="info">
                    <p>Node js</p>
                    <p>70%</p>
                </div>
                <div class="bar">
                    <span class="node"></span>
                </div>
            </div>
            <div class="skill_bar">
                <div class="info">
                    <p>Express js</p>
                    <p>65%</p>
                </div>
                <div class="bar">
                    <span class="express"></span>
                </div>
            </div>
            <div class="skill_bar">
                <div class="info">
                    <p>Mongo DB</p>
                    <p>60%</p>
                </div>
                <div class="bar">
                    <span class="mongo"></span>
                </div>
            </div>
        </div>
    </div>

            <Footer />
        </div>
    )
}

export default Skills