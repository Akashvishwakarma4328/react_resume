import './HeroimageProject.css';
import React from 'react'

const HeroimageProject = (prop) => {
  return (
    <div className='hero-img'>
        <div className='heading'>
            <h1>
                {prop.Heading}
            </h1>
            <p>
                {prop.Text}
            </p>
        </div>
    </div>
  )
}

export default HeroimageProject