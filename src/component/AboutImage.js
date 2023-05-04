import React from 'react'
import "./AboutImage.css";
import profileImg from "../Assets/profileImg.jpg";
const AboutImage = () => {
    return (
        <div className='container-image'>
            <img className='profileImage' src={profileImg}/>
            <div className='para'>
                <p>
                    As an experienced full stack web developer, I have a strong background in both front-end and back-end development. I am proficient in a variety of programming languages, including HTML, CSS, JavaScript, Python, and SQL.<br></br> <br></br>

                    On the front-end, I have extensive experience in building responsive and user-friendly interfaces using modern frameworks such as React, and ANgular. I am also skilled in using popular front-end tools and libraries such as Bootstrap, jQuery, and SASS.<br></br> <br></br>

                    On the back-end, I have a strong understanding of server-side programming and database management. I am proficient in using Node.js and Express to build RESTful APIs, as well as in using PHP and Laravel to develop scalable web applications. I have experience working with various databases, including MySQL and MongoDB. <br></br> <br></br>

                    In addition to my technical skills, I am highly collaborative and have experience working in agile development environments. I am also familiar with version control systems such as Git and have experience deploying applications to various cloud platforms such as AWS and Azure.

                    Overall, I am a passionate and dedicated full stack web developer who is always eager to learn and stay up-to-date with the latest technologies and best practices in the field.
                </p>
            </div>

        </div>
    )
}

export default AboutImage