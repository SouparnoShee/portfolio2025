import React from 'react'
import "./styles.scss"
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

const Workcard = ({ work }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="work-card">
            <div className="i-view">
                <img src={work.feature} alt="" />
            </div>
            <div className="f-view">
                <img src={work.ico} alt="" className='ico' />
                <h2>{work.title} </h2>
                <span>{work.desc}</span>
                <Link onClick={() => scrollTo(0, 0)} className='button' to={`/workinfo/${work.link}`}>Tour Project</Link>
            </div>
        </motion.div>
    )
}

export default Workcard
