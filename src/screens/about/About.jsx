import React from 'react'
import aboutimg from "../../assets/about-ico-souparno.png"
import "./styles.scss"
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiThreedotjs } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import moreinfo from "../../assets/moreinfo-ico.png"
import Specialization from '../../components/specialization/Specialization';
import SlidingIcon from '../../components/slidingico/SlidingIcon';
import CursorTrail from '../../components/cursortrail/CurserTrail';
import { motion } from "framer-motion"

const techdata = [
    {
        name: "React Js",
        ico: <FaReact className='sp-ico' />,
        progress: 85

    },
    {
        name: "Node Js",
        ico: <FaNode className='sp-ico' />,
        progress: 75

    },
    {
        name: "Express Js",
        ico: <SiExpress className='sp-ico' />,
        progress: 75

    },
    {
        name: "MongoDb (NoSQL Database)",
        ico: <SiMongodb className='sp-ico' />,
        progress: 85

    },
    {
        name: "Next Js",
        ico: <SiNextdotjs className='sp-ico' />,
        progress: 75

    },
    {
        name: "Three Js",
        ico: <SiThreedotjs className='sp-ico' />,
        progress: 65

    },
]
const designdata = [
    {
        name: "Adobe Illustrator",
        ico: <SiAdobeillustrator className='sp-ico' />,
        progress: 75

    },
    {
        name: "Figma",
        ico: <FaFigma className='sp-ico' />,
        progress: 95

    },
    {
        name: "Adobe Photoshop",
        ico: <SiAdobephotoshop className='sp-ico' />,
        progress: 85

    },

]
const About = () => {
    return (
        <div className='about'>
            <div className="about-head-section" id='hero-section'>
                <div className="upper">
                    <motion.h1
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >Innovative .<br /> Software Developer .</motion.h1>
                    <motion.img
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        src={aboutimg} alt="" />
                </div>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}>Hii, there it’s Souparno again, I’m born and brought up in West Bengal India, I design and code web applications, specialized at reactJs, NodeJs, Mongodb, tailwindCss, SASS and many more, over the years I have built many projects and worked in startups where I code industry level applications.</motion.p>
                <CursorTrail isEnabled={true} />
            </div>
            <SlidingIcon />
            <div className="specialize">
                <h1>Specialization</h1>
                <h2>in coding...</h2>
                <div className="stacks">
                    {
                        techdata.map((data) => (
                            <Specialization data={data} />
                        ))
                    }
                </div>

            </div>
            <div className="specialize2">
                <h2>in Design .....</h2>
                <div className="stacks-2">
                    {
                        designdata.map((data) => (
                            <Specialization data={data} />
                        ))
                    }
                </div>
            </div>
            <div className="more-info">
                <div className="left">
                    <img src={moreinfo} alt="" />
                    <h1>More Info ...</h1>
                </div>
                <div className="right">
                    <h2>Other than my coding skills and design skills, I work on wordpress, shopify and built projects with that, I have blender animation skills, digital marketing , SEO knowledge</h2>
                </div>
            </div>
        </div>
    )
}

export default About
