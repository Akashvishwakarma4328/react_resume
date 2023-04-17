import React from 'react'
import "./HeroImage.css";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const HeroImage = () => {
    return (
        <div className='hero'>
            <div className='mask'>
                <img src='https://images.unsplash.com/photo-1510936111840-65e151ad71bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1190&q=80' alt='Wait loading' />
            </div>
            <div className='Content'>
                <p>Hi, I'm a Fresher</p>
                <h1> React Developer .</h1>
                <br>
                </br>
                <br>
                </br>

                <div className='Button'>
                    <Link to='/Projects'>
                        <Button variant="warning"  >PROJECTS </Button>{''}
                        
                    </Link>

                    <Link to='/Contact'>
                        <Button variant="light" >CONTACTS</Button>{''}
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default HeroImage