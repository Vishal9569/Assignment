
import '../styleComponent/Footer.css';
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="hotel-info-container">
            
            <div className="hotel-info-menu">
                <ul>
                    <li>Rooms</li>
                    <li>Wellness</li>
                    <li>Gastro</li>
                    <li>Hotel</li>
                    <li>Events</li>
                </ul>
            </div>

            
            <div className="hotel-info-middle">
                <h2>More about rooms</h2>
                <ul>
                    <li>120 comfortable rooms</li>
                    <li>Dinings</li>
                    <li>Packages</li>
                    <li>Pools</li>
                </ul>
            </div>

           
            <div className="hotel-info-right">
                <h2>Wellness & Pools<br />Hotel Royal Phoenicia</h2>
                <p>Building 1288<br />Road 3931, Block 339<br />Umm Al Hasam - Manama<br />Bahrain</p>
                <p>+973 1730 7307</p>
                <p><a href="mailto:info@royalphoeniciahotel.com">info@royalphoeniciahotel.com</a></p>
                <p className="contact-link">Contacts →</p>

                <div className="social-icons">
                    <FaInstagram />
                    <FaFacebookF />
                    <FaYoutube />
                </div>
            </div>
        </div>
    );
};

export default Footer;
