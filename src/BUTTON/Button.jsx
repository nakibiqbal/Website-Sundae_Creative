/* eslint-disable react/prop-types */
import { motion } from "framer-motion"
import useAnimationBasic from "../ANIMATIONS/useAnimationBasic";
import "./Button.css"

const Button = ({ btnText }) => {
    const { mouseEnter, mouseLeave, variants, isHovered } = useAnimationBasic();

    return (
        <motion.div
            animate="buttonAnim"
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            className="buttonContainer"
        >
            {[1, 2].map((_, index) => {
                return <motion.div key={index} variants={variants}
                    custom={index}
                    transition={{
                        duration: 1,
                        ease: [0.25, 1, 0.5, 1],
                    }}
                    className="buttonBG"></motion.div>
            })}
            <div className="button">
                {[1, 2].map((_, index) => {
                    return <motion.button
                        key={index}
                        variants={variants}
                        transition={{
                            duration: 1,
                            ease: [0.25, 1, 0.5, 1],
                        }}
                        style={{
                            opacity: isHovered
                                ? index === 1
                                    ? 0
                                    : 1
                                : index === 1
                                    ? 1
                                    : 0, transition: "opacity 0.1s ease-in-out"
                        }}
                    >
                        {btnText}
                    </motion.button>
                })}
            </div>
        </motion.div>
    )
}

export default Button
