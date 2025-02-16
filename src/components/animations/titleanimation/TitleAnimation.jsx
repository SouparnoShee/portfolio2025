import React from 'react'
import "./styles.scss"
import { motion } from "framer-motion"

const TitleAnimation = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title">
            <h1 className='hero-h1'>H</h1>
            <h1 className='hero-h1'>I</h1>
            <h1 className='hero-h1'>'&nbsp;</h1>
            <h1 className='hero-h1'>I</h1>
            <h1 className='hero-h1'>M&nbsp;</h1>
            <h1 className='hero-h1'>S</h1>
            <h1 className='hero-h1'>O</h1>
            <h1 className='hero-h1'>U</h1>
            <h1 className='hero-h1'>P</h1>
            <h1 className='hero-h1'>A</h1>
            <h1 className='hero-h1'>R</h1>
            <h1 className='hero-h1'>N</h1>
            <h1 className='hero-h1'>O</h1>
        </motion.div>
    )
}

export default TitleAnimation
