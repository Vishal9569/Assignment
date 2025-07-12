import fitness from "../assets/fitness.jpg"
import wellness from "../assets/wellness.jpg"
import onsite from "../assets/onsite.jpg"
import "../styleComponent/Body-five.css"
const Body_five = () => {

    return (
        <>
            <div className="body-four-inner  body-five-inner">
                <div className="body-four-inner-div body-five-inner-div">
                    <img src={fitness} alt="" />
                    <p>fitness</p>
                    <h1>Center</h1>
                </div>
                <div className="body-four-inner-div body-five-inner-div">
                    <img src={onsite} alt="" />
                    <p>On-Site</p>
                    <h1>Dining</h1>
                    <h6>The hotel features an on-site <br />
                        resturant serving a variety of <br />
                        cuisines,diverse dining experiences <br />
                        without leaving the premises. <br />
                    </h6>
                    <button className="hover-circle-btn body-five-btn">Spa & Wellness</button>
                </div>
                <div className="body-four-inner-div body-five-inner-div">
                    <img src={wellness} alt="" />
                    <p>Wellness Center</p>
                    <h1>& Spa</h1>
                    <h6>Guests can unwind with various <br />
                        spa services,including full body <br />
                        massages , steam rooms, and other <br />
                        spa facilities.
                    </h6>
                </div>
            </div>
        </>
    )
}

export default Body_five;