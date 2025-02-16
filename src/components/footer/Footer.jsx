import React from 'react'
import "./styles.scss"

const Footer = () => {
    return (
        <div className='footer'>
            <div className="foot1">
                <div className="div1">
                    <h2>S.Shee</h2>
                    <span>Software Developer</span>
                    <span>Graphic Designer</span>
                    <span>Digital Marketer</span>
                </div>
                <div className="div1 maps">
                    <h2>Where I Live</h2>
                    <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d922.0116836950394!2d87.97226837573041!3d22.42726673510744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a029a87e95b81fd%3A0xd2012652ba903220!2z4KaJ4Kak4KeN4Kak4Kaw4Ka-IOCmleCnjeCmsuCmvuCmrA!5e0!3m2!1sen!2sin!4v1738223812987!5m2!1sen!2sin" ></iframe>
                </div>
                <div className="links">
                    <h2>Links</h2>
                    <span>Contact Me</span>
                    <span>Hire Me</span>
                    <span>My Works</span>
                </div>
            </div>
            <div className="foot2">
                <h3>All Rights Reserved 2025 © built by Souparno Shee</h3>
            </div>
        </div>
    )
}

export default Footer
