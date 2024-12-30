/* eslint-disable react/prop-types */
import "./FlipText.css"
import { motion } from "framer-motion"

export const FlipText = ({ children, classOne, classTwo }) => {
    const transitionAnimate = { duration: 0, ease: [0.215, 0.61, 0.355, 1], delay: 0.5, type: "tween" }
    const transitionExit = { duration: 0, ease: [0.215, 0.61, 0.355, 1], delay: 0, type: "tween" }
    return (
        <div className={classOne ? `textAnimLogic ${classOne}` : "textAnimLogic"} >
            <div className={classTwo ? `rotate ${classTwo}` : "rotate"}>
                <p >{children}</p>
            </div>
            <div className={classTwo ? `rotate ${classTwo}` : "rotate"}>
                <motion.p
                    initial={{ marginTop: -80 }}
                    animate={{ marginTop: 0, transition: transitionAnimate }}
                    exit={{ marginTop: -80, transition: transitionExit }}
                    className={classTwo ? `rotate ${classTwo}` : "rotate"}>
                    {children}
                </motion.p>
            </div>
        </div>
    )
}