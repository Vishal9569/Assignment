import "../styleComponent/Body-three.css"
import img1 from "../assets/photo1.jpg";
import img2 from "../assets/photo4.jpg";
import img3 from "../assets/photo5.jpg";
const Body_three = () => {

    return (
        <>
            <div className="body-three">
                <div className="body-three-inner">
                    <div className="inner-div">
                        <img src={img3} alt="" srcset="" />
                        <p>Rooms</p>
                    </div>
                    <div className="inner-div">
                        <img src={img1} alt="" srcset="" />
                        <p>Pools</p>
                    </div>
                    <div className="inner-div">
                        <img src={img2} alt="" srcset="" />
                        <p>Dining</p>
                    </div>
                </div>
                <button className="hover-circle-btn body-three-btn">
                    <span className="btn-text">Accomodation</span>
                    <span className="btn-arrow">→</span>
                </button>
            </div>
        </>
    )
}


export default Body_three;