/* eslint-disable react/prop-types */
import "./FancyText.css";
import { motion } from "framer-motion";

const FancyText = ({ ParallaxMovement, isLargeScreen }) => {
    const variants = {
        initialOne: {
            clipPath: isLargeScreen ? "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" : "none",
            y: isLargeScreen ? 200 : 50,
            rotate: isLargeScreen ? 5 : 20,
        },
        animateOne: {
            clipPath: isLargeScreen ? "polygon(0% 0%, 100% 0%, 100% 200%, 0% 200%)" : "none",
            y: 0,
            rotate: 0,
        },
        initialTwo: {
            clipPath: isLargeScreen ? "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" : "none",
            y: isLargeScreen ? -200 : -50,
            rotate: isLargeScreen ? -5 : -20,
        },
        animateTwo: {
            clipPath: isLargeScreen ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" : "none",
            y: 0,
            rotate: 0,
        }
    }
    const transitionTwo = {
        duration: 1.25,
        ease: [0.215, 0.61, 0.355, 1],
    }

    return (
        <motion.div style={{ y: isLargeScreen ? ParallaxMovement(0, -100) : 0 }} className="conOFsec1ONE">
            <div className="emni ab">
                <motion.span variants={variants}
                    initial="initialOne"
                    animate="animateOne"
                    transition={{
                        duration: 1.25,
                        ease: [0.215, 0.61, 0.355, 1],
                        clipPath: { duration: 4, ease: [0.215, 0.61, 0.355, 1] },
                    }}
                >
                    a new
                </motion.span>
            </div>
            <div className="emni ab">
                <motion.span variants={variants}
                    initial="initialOne"
                    animate="animateOne"
                    transition={{
                        duration: 1.25,
                        ease: [0.215, 0.61, 0.355, 1],
                        clipPath: { duration: 5, ease: [0.215, 0.61, 0.355, 1] },
                    }}
                >
                    generation
                </motion.span>
            </div>
            <div className="emni cd">
                <motion.span variants={variants}
                    initial="initialTwo"
                    animate="animateTwo"
                    transition={transitionTwo}>
                    communications
                </motion.span>
            </div>
            <div className="emni cd">
                <motion.span variants={variants}
                    initial="initialTwo"
                    animate="animateTwo"
                    transition={transitionTwo}>
                    agency
                </motion.span>
            </div>
        </motion.div>)
}

export default FancyText
