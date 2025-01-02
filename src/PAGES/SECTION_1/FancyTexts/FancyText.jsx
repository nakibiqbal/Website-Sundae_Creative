/* eslint-disable react/prop-types */
import "./FancyText.css";
import { motion } from "framer-motion";

const FancyText = ({ ParallaxMovement, isLargeScreen }) => {
    const variants = {
        initialOne: {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            y: isLargeScreen ? 200 : 50,
            rotate: 5,
        },
        animateOne: {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 200%, 0% 200%)",
            y: 0,
            rotate: 0,
        },
        initialTwo: {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            y: isLargeScreen ? -200 : -50,
            rotate: -5,
        },
        animateTwo: {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
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
            <motion.h1
                variants={variants}
                initial="initialOne"
                animate="animateOne"
                transition={{
                    duration: 1.25,
                    ease: [0.215, 0.61, 0.355, 1],
                    clipPath: { duration: 4, ease: [0.215, 0.61, 0.355, 1] },
                }}
            >
                a new
            </motion.h1>
            <motion.h1
                variants={variants}
                initial="initialOne"
                animate="animateOne"
                transition={{
                    duration: 1.25,
                    ease: [0.215, 0.61, 0.355, 1],
                    clipPath: { duration: 5, ease: [0.215, 0.61, 0.355, 1] },
                }}
            >
                generation
            </motion.h1>
            <motion.h1
                variants={variants}
                initial="initialTwo"
                animate="animateTwo"
                transition={transitionTwo}
            >
                communications
            </motion.h1>
            <motion.h1
                variants={variants}
                initial="initialTwo"
                animate="animateTwo"
                transition={transitionTwo}
            >
                agency
            </motion.h1>



        </motion.div>
    )
}

export default FancyText
