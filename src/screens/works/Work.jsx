import React from 'react'
import "./styles.scss"
import { MdWorkHistory } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { workcards } from '../../data/cards';
import Workcard from '../../components/workcards/Workcard';




const Work = () => {
    return (
        <div className='work'>
            <div className="work-head">
                <MdWorkHistory className='history-icon' />
                <h1>My Works</h1>
                <p>Over the years I have done many freelance works and contract works with startups, <br /> also as a digital junkie I build my  own products </p>
                <div className="also-there">
                    <p>Also Showcasing :-</p>
                    <RiInstagramFill className='social-icon' />
                    <FaSquareXTwitter className='social-icon' />
                    <IoLogoYoutube className='social-icon' />
                    <FaLinkedin className='social-icon' />
                </div>
            </div>
            <div className="work-title">
                <h2>Freelance Works</h2>
                <p>All Freelance Works including my own clients and projects built with collaboration with other companies</p>
            </div>
            <div className="work-cards">
                {
                    workcards.map((w) => (
                        <Workcard key={w.title} work={w} />
                    ))
                }
            </div>
            <div className="product-title">
                <h2>My Products</h2>
                <p>My built-in products</p>
            </div>
            <div className="product-cards">
                <div className="coming-soon">
                    <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGliNWllMDVlMjhoMDNkZHBpbXV2d2ZnZnNuZXQ5dGp1dGh0MTY5NiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/5q3NyUvgt1w9unrLJ9/giphy.gif" alt="" />
                    <h2>Awesome prooducts are coming soon</h2>
                    <p>I'm currently working on some cool stuffs, stay tuned </p>
                </div>
            </div>
        </div>
    )
}

export default Work
