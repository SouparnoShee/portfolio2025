import React, { useEffect, useState } from 'react'
import "./styles.scss"
import CursorTrail from '../../components/cursortrail/CurserTrail'
import heroimg from "../../assets/portfolio-heroimg.png"
import aboutlappy from "../../assets/about-lappy.png"
import TitleAnimation from '../../components/animations/titleanimation/TitleAnimation'
import Workcard from '../../components/workcards/Workcard'
import { workcards } from '../../data/cards'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'


const Home = () => {

    return (
        <div className='home'>
            <div className="hero" id='hero-section'>
                <motion.img
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    src={heroimg} alt="" className='hero-img' />
                <TitleAnimation />
                <h2 className='hero-h2'>Web Developer & Designer</h2>
                <Link to={"/hireme"} className='hero-button'>Let's Talk</Link>
                <CursorTrail isEnabled={true} />
            </div>
            <div className="about-sec">
                <h1 className='about-head'>ABOUT ME .</h1>
                <div className="about-box">
                    <div
                        className="left">
                        <motion.img initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }} src={aboutlappy} alt="" className='about-lappy' />
                        <motion.h2
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        >Digital Product Developer.</motion.h2>
                        <motion.p initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}>My mission is to empower businesses with the tools and expertise needed to succeed in a competitive digital landscape. I’m passionate about helping you achieve your goals through innovative solutions and exceptional service</motion.p>
                    </div>
                    <div className="right">
                        <motion.p initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }} className='speciality'>Web Developer , Mobile App Developer, Graphic Designing,
                            Product Designing, digital Marketing</motion.p>

                        <motion.div initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }} className="whyme">
                            <h2>Why Me ?</h2>
                            <ul>
                                <li>. Fast Delivery according to deadline</li>
                                <li>. Clean Coding and smooth architecture</li>
                                <li>.Valuable products at reasonable pricing</li>
                                <li>. Clean Communication with 24x7 guidance</li>
                                <li>. Proper Maintainance</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
                <div className='butt-sec'>
                    <Link onClick={() => scrollTo(0, 0)} to={"/about"} className='about-butt'>More Details ...</Link>
                </div>
            </div>
            <div className="works">
                <h1>My Works .</h1>
                <div className='freelance-works'>
                    <div className="title">
                        <h2>Freelance Works</h2>
                        <p>As a freelance web developer over the years I have worked on many projects , below are my freelace projects , have a quick look</p>
                    </div>
                    <div className="work-cards">

                        {
                            workcards.map((w) => (
                                <Workcard key={w.title} work={w} />
                            )).slice(0, 4)
                        }


                    </div>
                </div>
                <div className="hire-button">
                    <Link onClick={() => scrollTo(0, 0)} to={"/hireme"} className='hiremelink'>Hire Me</Link>
                </div>
            </div>
            <div className="contact-section">
                <h1>Contact Me .</h1>
                <div className="contact-form">
                    <h3>Fill the form below, I will get in touch soon</h3>
                    <form className="form">
                        <input type="text" placeholder='Your Name .' />
                        <input type="email" placeholder='Your Email .' />
                        <input type="number" placeholder='Your Number (Includes whatsapp) .' />
                        <input type="text" placeholder='A Quick Message .' />
                        <button>Get in Touch</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home
