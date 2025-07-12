import React, { useEffect, useState } from 'react';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import '../styleComponent/Banner.css';

const Banner = () => {
    const [stage, setStage] = useState('first');

    useEffect(() => {
        let stages = ['first', 'zoom-in', 'second'];
        let index = 0;

        const loop = () => {
            setStage(stages[index]);
            index = (index + 1) % stages.length;
            let timeout = index === 1 ? 4000 : 5000;
            setTimeout(loop, timeout);
        };

        loop();
    }, []);

    return (
        <>

            <div className="banner-wrapper">
                <div className="persistant-text">
                    <h1 className='banner-text'>Hotel</h1>
                    <h1 className='banner-text'>Royal Phoenicia</h1> <br />
                    <p className='text-para'>Your Favourite Place . Our Family Store.</p>
                </div>


                 
                <img
                    src={banner2}
                    alt="Banner 2"
                    className={`banner-image ${stage === 'zoom-in' ? 'zoom-in-effect' : ''}`}
                />
 
                <div className="second-section">
                    <div className={`fold-wrapper ${stage === 'second' ? 'show' : ''}`}>
                        <img
                            src={banner1}
                            alt="Banner 1"
                            className={`banner-image fold-in-paper ${stage === 'second' ? 'animate' : ''}`}
                        />
                    </div>

                    {stage === 'second' && (
                        <div className="scroll-content">
                            <h1>Welcome to Royal Phoenicia</h1>
                            <p>Luxury like you've never experienced before.</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Banner;
