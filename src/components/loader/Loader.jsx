import React from 'react'
import { motion } from "framer-motion"
import { MutatingDots } from 'react-loader-spinner'

const Loader = () => {
    return (
        <div className='loader'>
            {/* <motion.h1
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >S.</motion.h1> */}
            <divW
                className="down-loader">
                <motion.h2
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}

                >L</motion.h2>
                <motion.h2
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}

                >O</motion.h2>
                <motion.h2
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}

                >A</motion.h2>
                <motion.h2
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}

                >D</motion.h2>
                <motion.h2
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9 }}

                >I</motion.h2>
                <motion.h2
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}

                >N</motion.h2>
                <motion.h2
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.1 }}

                >G</motion.h2>
                <motion.h2
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}

                >.</motion.h2>
                <motion.h2
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.3 }}

                >.</motion.h2>
                <motion.h2
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1.4
                    }}
                >.</motion.h2>
            </divW>
            <MutatingDots
                visible={true}
                height="100"
                width="100"
                color="#212121"
                secondaryColor="#212121"
                radius="12.5"
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div >

    )
}

export default Loader
