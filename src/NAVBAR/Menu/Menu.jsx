import { motion } from "framer-motion"
import "./Menu.css"

const Menu = () => {

    const menuVariant = {
        initial: { y: "-100%" },
        animate: {
            y: 0, transition: {
                duration: 1,
                ease: [0.87, 0, 0.13, 1],
                type: "tween"
            }
        },
        exit: {
            y: "-100%", transition: {
                duration: 1,
                ease: [0.87, 0, 0.13, 1],
                type: "tween"
            }
        },
    }

    return (
        <>
            <motion.div
                variants={menuVariant}
                initial="initial"
                animate="animate" exit="exit"
                className="menuBar"
            />
        </>
    )
}

export default Menu
