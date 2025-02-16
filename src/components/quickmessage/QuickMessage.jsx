import React, { useState } from 'react'
import portimg from "../../assets/face-p.png"
import "./styles.scss"
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';


const QuickMessage = () => {
    const [msgClicked, setMsgClicked] = useState(false)
    const hireClicked = () => {
        scrollTo(0, 0)
        setMsgClicked(false)
    }
    return (
        <>
            <div className="quick-res" onClick={() => setMsgClicked(!msgClicked)}>
                <div className="hire-me">
                    <span>Hire Me</span>
                </div>
                <img src={portimg} alt="" />
            </div>
            {
                msgClicked ? <div className="open-box">
                    <RxCross1 className='cross' onClick={() => setMsgClicked(false)} />
                    <h4>Contact Me Now</h4>
                    <div className="icons">
                        <a href="https://www.instagram.com/enduresouparno/"><RiInstagramFill className='socials' /></a>
                        <a href="https://github.com/SouparnoShee"> <FaGithub className='socials' /></a>
                        <a href="https://api.whatsapp.com/send?phone=9907244937"> <IoLogoWhatsapp className='socials' /></a>
                    </div>
                    <span>Contact No. -9907244937</span>
                    <span>Email -devsouparno@gmail.com</span>
                    <Link onClick={hireClicked} to={"/hireme"} className='hireme'>Hire Me</Link>
                </div> : null
            }

        </>
    )
}

export default QuickMessage
