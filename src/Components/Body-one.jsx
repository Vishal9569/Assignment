import React from 'react'
import "../styleComponent/Body-one.css"
import { IoIosArrowForward } from "react-icons/io";
const Body_one = () => {
    return (
        <>
            <div className="page-wrapper">
                <div className="Body-one">
                    <p className='Body-one-text'>The stay at Wellness & pool Hotel</p>
                    <br />
                    <p className='Body-one-text Body-one-text3' >RoyalPhoenicia means enjoying every moment. </p>
                    <br />
                    <p className='Body-one-text Body-one-text2'>Relax. Find inspiration. Be fascinated.</p>
                </div>

                <button className="hover-circle-btn">
                    <span className="btn-text">Hotel</span>
                    <span className="btn-arrow">→</span>
                </button>
            </div>

        </>
    )
}

export default Body_one;