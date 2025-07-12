import "../styleComponent/Body-six.css"
import about1 from "../assets/about1.jpg"
import about2 from "../assets/photo4.jpg"
import about3 from "../assets/about3.jpg"

const Body_six = () => {

    return (
        <>
            <div className="body-six">
                <h2> Exceptional gastronomy <br />
                    served in elegant spaces.
                </h2>
                <div className="body-six-inner">
                    <div class="vertical-slider">
                        <div class="slider-track">
                            <img src={about1} alt="Image 1" />
                            <img src={about2} alt="Image 2" />
                            <img src={about3} alt="Image 3" />
                        </div>
                    </div>
                    <div className="text-div">
                        <h2>About Us</h2>
                        <p>
                            Royal Phoenicia Hotel offers an array of top-tier<br />
                            facilities designed to enhance the comfort and<br />
                            convenience of every guest. The hotel features<br />
                            a luxurious spa and wellness center, where<br />
                            guests can indulge in soothing treatments and<br />
                            rejuvenating massages. For those seeking to<br />
                            maintain their fitness routine, the fully equipped<br />
                            gym provides a space for exercise, while the<br />
                            outdoor pool offers a relaxing environment to<br />
                            unwind. Dining at the hotel is a pleasure, with<br />
                            an on-site restaurant offering a diverse<br />
                            selection of cuisines in an elegant atmosphere.<br />
                            Additionally, the hotel provides business<br />
                            facilities, including meeting rooms and event<br />
                            spaces, ideal for corporate travelers. With its<br />
                            comprehensive range of services.
                        </p>

                    </div>
                </div>




            </div>
        </>
    )
}


export default Body_six;