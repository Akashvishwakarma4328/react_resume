import React from 'react'
import "./ContactHome.css";
const ContactHaome = () => {
    return (
        <div>
            <div classNameName='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.5358693949966!2d76.84652349678959!3d23.07747149999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397ce9ceaaaaaaab%3A0xa224b6b82b421f83!2sVellore%20Institute%20of%20Technology%20-%20VIT%20Bhopal!5e0!3m2!1sen!2sin!4v1683887823373!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>


            <div className='form'>
                <form method="post">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Your name.." required />

                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email" placeholder="Your email.." required />


                    <label for="message">Message:</label>
                    <textarea id="message" name="message" placeholder="Write something.." required></textarea>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactHaome