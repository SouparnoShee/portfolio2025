import React from 'react'
import { Link } from 'react-router-dom'
import { RxCross1 } from "react-icons/rx";


const Menu = ({ setHam }) => {
    const navClickEvent = () => {
        setHam(false);
        scrollTo(0, 0)
    }
    return (
        <div className='menu'>
            <RxCross1 className='cross' onClick={() => setHam(false)} />
            <Link className='link' to={"/"} onClick={navClickEvent}>Home</Link>
            <Link className='link' to={"/about"} onClick={navClickEvent}>About</Link>
            <Link className='link' to={"/contact"} onClick={navClickEvent}>Contact</Link>
            <Link className='link' to={"/works"} onClick={navClickEvent}>Works</Link>
            <Link className='butt-link' to={"hireme"} onClick={navClickEvent}>HireMe</Link>
        </div>
    )
}

export default Menu
