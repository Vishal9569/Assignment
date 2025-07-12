import React, { useEffect, useRef, useState } from 'react';
import '../styleComponent/body-two.css';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';
const images = [
    photo1, photo2, photo3
];

const Body_Two = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const timeoutRef = useRef(null);

    const nextSlide = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
            setIsTransitioning(false);
        }, 1000); 
    };

    useEffect(() => {
        timeoutRef.current = setInterval(nextSlide, 5000);
        return () => clearInterval(timeoutRef.current);
    }, []);

    return (
        <div className="hero-container">
            <div className="background-slider">
                {images.map((src, index) => {
                    const isCurrent = index === currentIndex;
                    const isPrev = index === (currentIndex - 1 + images.length) % images.length;
                    return (
                        <div
                            key={index}
                            className={`background-image-wrapper ${isCurrent
                                ? isTransitioning
                                    ? 'fold-in'
                                    : 'unfolded'
                                : isPrev && isTransitioning
                                    ? 'fold-out'
                                    : 'hidden-slide'
                                }`}
                            style={{ backgroundImage: `url('${src}')` }}
                        ></div>
                    );
                })}
            </div>



            <div className="content-card-wrapper">
                <div className="content-card-inner">
                    <div className="content-card">
                        <h2>Favorite Hotel</h2>

                        <p> Business and Event Spaces</p>
                        <p> Diverse Dining Options</p>
                        <p> Multiple Swimming Pools</p>
                        <p> Family-Friendly Amenities</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body_Two;
