import { PiBagBold } from "react-icons/pi";
import img1 from "../assets/photo6.jpg"
import img2 from "../assets/photo7.jpg"
import img3 from "../assets/photo8.jpg"
import "../styleComponent/Body-four.css"
import Animatedtext from "./Animatetext"
const Body_four = () => {

    return (
        <>
            <div className="body-four">
                <Animatedtext />
                <div className="body-four-inner">
                    <div className="body-four-inner-div">
                        <img src={img3} alt="" />
                        <div className="content-div">
                            <p>All Season</p>
                            <h1>Family Fun Staycation</h1>
                            <p className="descri">From BHD 150 / 4 person / 2 Night</p>
                            <div className="btn-div">
                                <button className="hover-circle-btn body-three-btn">More</button>
                                <button className="hover-circle-btn body-three-btn"><PiBagBold /></button>
                            </div>
                        </div>
                    </div>
                    <div className="body-four-inner-div">
                        <img src={img1} alt="" />
                        <p>Pools</p>
                        <div className="content-div">
                            <p>All Season</p>
                            <h1>Family Fun Staycation</h1>
                            <p className="descri">From BHD 150 / 4 person / 2 Night</p>
                            <div className="btn-div">
                                <button className="hover-circle-btn body-three-btn">More</button>
                                <button className="hover-circle-btn body-three-btn"><PiBagBold /></button>
                            </div>
                        </div>
                    </div>
                    <div className="body-four-inner-div">
                        <img src={img2} alt="" />
                        <p>Dining</p>
                        <div className="content-div">
                            <p>All Season</p>
                            <h1>Family Fun Staycation</h1>
                            <p className="descri">From BHD 150 / 4 person / 2 Night</p>
                            <div className="btn-div">
                                <button className="hover-circle-btn body-three-btn">More</button>
                                <button className="hover-circle-btn body-three-btn"><PiBagBold /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Body_four