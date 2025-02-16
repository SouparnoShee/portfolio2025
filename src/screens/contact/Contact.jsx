import React from 'react'
import "./styles.scss"
import { RiContactsBook3Fill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";



const Contact = () => {
    return (
        <div className='contact'>
            <div className="first-section">
                <RiContactsBook3Fill className='cb-icon' />
                <h1>Get In Touch .</h1>
                <h3>Lets build something big together</h3>
            </div>
            <div className="form-section">
                <h1>Fill the form below and contact me now .</h1>
                <form>
                    <input type="text" placeholder='Your Name' />
                    <input type="text" placeholder='Your Name' />
                    <input type="text" placeholder='Your Name' />
                    <textarea name="" id="" placeholder='Your Message ....'></textarea>
                    <button>Submit</button>
                </form>
            </div>
            <div className="more-info">
                <h2>Also Contact & Follow me on :-</h2>
                <div className="icons">
                    <a href="https://www.instagram.com/enduresouparno/"><RiInstagramFill className='socials' /></a>
                    <a href="https://github.com/SouparnoShee"> <FaGithub className='socials' /></a>
                    <a href="https://api.whatsapp.com/send?phone=9907244937"> <IoLogoWhatsapp className='socials' /></a>
                </div>
                <p>Email Id - devsouparno@gmail.com</p>
                <p>Contact No. - 9907244937</p>
            </div>
        </div>
    )
}

export default Contact
