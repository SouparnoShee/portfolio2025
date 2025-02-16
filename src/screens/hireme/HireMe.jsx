import React, { useState } from 'react'
import "./styles.scss"
import { budgetTags, techtags } from './tags'
import { GoArrowRight } from "react-icons/go";


const HireMe = () => {
    const [selectclicked, setSelectClicked] = useState(null)
    const [selectclickedbudget, setSelectClickedBudget] = useState(null)
    const selectTag = (name) => {
        setSelectClicked(name)
    }
    const selectBudget = (name) => {
        setSelectClickedBudget(name)
    }
    return (
        <div className='hire-me'>
            <div className="intro-hire">
                <div className="heading-hire">
                    <h1><span>Say Hi!</span>and tell me about your idea</h1>
                </div>
                <p>Have a nice idea or digitalize your business ? lets chat</p>
            </div>
            <form className="hire-form">
                <input type="text" placeholder='Enter Your Name' />
                <input type="text" placeholder='Enter Your Email' />
                <input type="text" placeholder='Enter Your Phone Number (Includes Whatsapp)' />
                <input type="text" placeholder='Enter Your Company Name (If Any)' />
                <div className="type-select">
                    <h2>Whats On Your Mind ?</h2>
                    <div className="butts">
                        {
                            techtags.map((tag) => (
                                <div className={selectclicked === tag.name ? "buttclicked" : "butt"} onClick={() => selectTag(tag.name)} key={tag.name}>
                                    <p>{tag.title}</p>
                                </div>
                            ))
                        }

                    </div>
                </div>
                <div className="budget">
                    <h2>Enter Your Budget</h2>
                    <div className="buds">
                        {
                            budgetTags.map((tag) => (
                                <div className={selectclickedbudget === tag.name ? "budclicked" : "bud"} onClick={() => selectBudget(tag.name)} key={tag.name}>
                                    <p>{tag.budget}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <textarea type="text" placeholder='Give me some quick message' />
                <div className="button">
                    <button>
                        Submit
                        <GoArrowRight />
                    </button>
                </div>

            </form>
        </div>
    )
}

export default HireMe
