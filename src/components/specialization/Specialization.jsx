import React from 'react'
import "./styles.scss"
import { motion } from "framer-motion"



const Specialization = ({ data }) => {
    return (
        <div className="stack">
            <div className="nameofstack">
                <p>{data.name}</p>
            </div>
            {data.ico}
            <div className="bar">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="progress" style={{ width: `${data.progress}%` }}></motion.div>
            </div>
        </div>
    )
}

export default Specialization
