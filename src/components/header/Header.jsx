import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./styles.scss"
import Menu from './Menu'
import { FaHamburger } from "react-icons/fa";


const Header = () => {
    const [header, setHeader] = useState('header')
    const [ham, setHam] = useState(false)

    const scrollEventInitiate = () => {
        if (window.scrollY < 73) {
            return setHeader('header')
        } else if (window.scrollY > 73) {
            return setHeader("header2")
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollEventInitiate);
        return () =>
            window.removeEventListener('scroll', scrollEventInitiate);
    }, [])
    return (
        <div className={header}>
            <Link className='logo' to={"/"}>S.Shee</Link>
            <div className="links">
                <Link onClick={() => scrollTo(0, 0)} className='link' to={"/"}>Home</Link>
                <Link onClick={() => scrollTo(0, 0)} className='link' to={"/about"}>About</Link>
                <Link onClick={() => scrollTo(0, 0)} className='link' to={"/contact"}>Contact</Link>
                <Link onClick={() => scrollTo(0, 0)} className='link' to={"/works"}>Works</Link>
                <Link onClick={() => scrollTo(0, 0)} className='butt-link' to={"/hireme"} >HireMe</Link>
            </div>
            <FaHamburger className='ham-ico' onClick={() => setHam(true)} />
            {ham ? <Menu setHam={setHam} /> : null}
        </div>
    )
}

export default Header
