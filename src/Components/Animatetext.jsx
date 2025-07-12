import React, { useEffect, useState } from "react";
import "../styleComponent/Animated-text.css";  

const Animated_text = ({ text = "Stay packages", speed = 100 }) => {
    const [visibleLetters, setVisibleLetters] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleLetters((prev) => {
                if (prev < text.length) return prev + 1;
                clearInterval(interval);
                return prev;
            });
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return (
        <div className="text">
            {text.split("").map((char, index) => (
                <span
                    key={index}
                    className={`letter ${index < visibleLetters ? "show" : ""}`}
                >
                    {char}
                </span>
            ))}
        </div>
    );
};

export default Animated_text;
