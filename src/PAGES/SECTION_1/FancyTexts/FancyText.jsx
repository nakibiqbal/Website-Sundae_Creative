/* eslint-disable react/prop-types */
import "./FancyText.css";
import { motion } from "framer-motion";

const FancyText = ({ ParallaxMovement, isLargeScreen }) => {
    const variants = {
        initialOne: {
            clipPath: isLargeScreen ? "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" : "none",
            y: isLargeScreen ? 200 : 0,
            rotate: isLargeScreen ? 5 : 0,
            opacity: isLargeScreen ? 1 : 0,
        },
        animateOne: {
            clipPath: isLargeScreen ? "polygon(0% 0%, 100% 0%, 100% 200%, 0% 200%)" : "none",
            y: 0,
            rotate: 0,
            opacity: 1,
        },
        initialTwo: {
            clipPath: isLargeScreen ? "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" : "none",
            y: isLargeScreen ? -200 : 0,
            rotate: isLargeScreen ? -5 : 0,
            opacity: isLargeScreen ? 1 : 0,
        },
        animateTwo: {
            clipPath: isLargeScreen ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" : "none",
            y: 0,
            rotate: 0,
            opacity: 1,
        }
    }
    const transitionTwo = {
        duration: 1.25,
        ease: [0.215, 0.61, 0.355, 1],
    }

    return (
        <motion.div style={{ y: isLargeScreen ? ParallaxMovement(0, -100) : 0 }} className="conOFsec1ONE">
            <motion.div
                variants={variants}
                initial="initialOne"
                animate="animateOne"
                transition={{
                    duration: 1.25,
                    ease: [0.215, 0.61, 0.355, 1],
                    clipPath: { duration: 4, ease: [0.215, 0.61, 0.355, 1] },
                }}
                className="emni ab">
                <span>
                    a new
                </span>
            </motion.div>
            <motion.div
                variants={variants}
                initial="initialOne"
                animate="animateOne"
                transition={{
                    duration: 1.25,
                    ease: [0.215, 0.61, 0.355, 1],
                    clipPath: { duration: 5, ease: [0.215, 0.61, 0.355, 1] },
                }}
                className="emni ab">
                <span>
                    generation
                </span>
            </motion.div>
            <motion.div
                variants={variants}
                initial="initialTwo"
                animate="animateTwo"
                transition={transitionTwo}
                className="emni cd">
                <span>
                    communications
                </span>
            </motion.div>
            <motion.div
                variants={variants}
                initial="initialTwo"
                animate="animateTwo"
                transition={transitionTwo}
                className="emni cd">
                <span>
                    agency
                </span>
            </motion.div>
        </motion.div>)
}

export default FancyText
