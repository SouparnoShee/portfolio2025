import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiThreedotjs } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import "./styles.scss"

const SlidingIcon = () => {
    return (
        <div className='sliding-icons'>
            <FaReact className='i' />
            <FaNode className='i' />
            <SiExpress className='i' />
            <SiMongodb className='i' />
            <SiNextdotjs className='i' />
            <SiThreedotjs className='i' />
            <SiAdobeillustrator className='i' />
            <SiAdobephotoshop className='i' />

        </div>
    )
}

export default SlidingIcon
