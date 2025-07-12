import "../styleComponent/body-seven.css"
import { FiBell } from 'react-icons/fi';
import { TbPool, TbDoor } from 'react-icons/tb';
import lastImg from "../assets/lastimg.jpg"
const Body_seven = () => {

    return (
        <>
            <div className="body-seven">
                <div className="body-seven-text-div">
                    <div className="body-seven-inner-text">
                        <FiBell size={40} />
                        <h2>Restaurant</h2>
                        <p>
                            Royal Phoenicia Hotel offers an array of top-tier facilities designed to enhance
                            the comfort and convenience of every guest.
                        </p>
                    </div>
                    <div className="body-seven-inner-text">
                        <TbPool size={40} />
                        <h2>POOL</h2>
                        <p>
                            Royal Phoenicia Hotel features multiple outdoor swimming pools, including a dedicated
                            children's pool, offering relaxation for all guests.
                        </p>
                    </div>
                    <div className="body-seven-inner-text">
                        <TbDoor size={40} />
                        <h2>ROOM</h2>
                        <p>
                            Royal Phoenicia Hotel in Manama, Bahrain, offers a variety of spacious and
                            well-equipped rooms to suit diverse guest preferences.
                        </p>
                    </div>
                </div>
                <div className="body-seven-photo-div">
                    <img src={lastImg} alt="Background" className="seven-bg-img" />

                    
                    <div className="animated-line">
                        <p>Social Celebrations Corporate Events </p>
                    </div>

                   
                    <div className="content-card-inner">
                        <div className="content-card seven-body-card">
                            <h2>For companies </h2>
                            <p>Host your formal business meetings <br />
                                in a unique and refreshing setting. <br />
                                Enjoy elegant Venues, comfortable <br />
                                accommodations , and exceptional <br />
                                cuisine that elevate every <br />
                                professinal gathering
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body_seven;