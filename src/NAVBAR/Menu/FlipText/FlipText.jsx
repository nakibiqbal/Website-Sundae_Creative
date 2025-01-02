/* eslint-disable react/prop-types */
import "./FlipText.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const FlipText = ({ children, classOne, classTwo }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const transitionAnimate = { duration: 0, ease: [0.215, 0.61, 0.355, 1], delay: isMobile ? 0.3 : 0.5, type: "tween" };
    const transitionExit = { duration: 0, ease: [0.215, 0.61, 0.355, 1], delay: isMobile ? 0.3 : 0, type: "tween" };

    return (
        <div className={classOne ? `textAnimLogic ${classOne}` : "textAnimLogic"}>
            <div className={classTwo ? `rotate ${classTwo}` : "rotate"}>
                <p>{children}</p>
            </div>
            <div className={classTwo ? `rotate ${classTwo}` : "rotate"}>
                <motion.p
                    initial={{ marginTop: -100 }}
                    animate={{ marginTop: 0, transition: transitionAnimate }}
                    exit={{ marginTop: -100, transition: transitionExit }}
                    className={classTwo ? `rotate ${classTwo}` : "rotate"}
                >
                    {children}
                </motion.p>
            </div>
        </div>
    );
};