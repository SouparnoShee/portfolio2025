import React from 'react'
import "./styles.scss"
import Slider from "react-slick";
import { workinfo } from '../../data/workinf';
import { FaLink } from "react-icons/fa6";
import { useParams } from 'react-router-dom';


const WorkInfo = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,

    };
    const title = useParams().work;
    const workname = workinfo.filter(w => w.title === title)[0]
    console.log(workname)
    return (
        <div className='workinfo'>
            <div className="head">
                <h1>{workname?.head}</h1>
                <div className="og-link">
                    <FaLink className='site-link' />
                    <a href="">Visit Site</a>
                </div>
            </div>
            <div className="slide">
                <Slider {...settings} className='slider'>
                    {
                        workname?.img.map((i) => (
                            <div className='slider-box'>
                                <img src={i} alt="" />
                            </div>
                        ))
                    }
                </Slider>
            </div>
            <div className="work-details">
                <div className="wd-head">
                    <h1>{workname?.head}</h1>
                    <p>{workname?.subhead}</p>
                </div>
                <div className="about-points">
                    <h2>About Project</h2>
                    <p>
                        {workname?.about}
                    </p>
                    <div className="key-features">
                        <h3>Key Features</h3>
                        <ul>
                            {
                                workname?.keys.map((k) => (
                                    <li>{k}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkInfo
