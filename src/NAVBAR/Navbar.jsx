import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import "./Navbar.css"
import Menu from "./Menu/Menu"
import logo from "/Images/logo.png"
import MenuContent from "./Menu/MenuContent/MenuContent"

const Navbar = () => {
    const [onClick, setOnClick] = useState(false);
    const buttonVariants = {
        animate: {
            y: onClick ? 0 : "-100%", transition: {
                duration: 1,
                ease: [0.87, 0, 0.13, 1],
                type: "tween"
            }
        },
        exit: {
            y: "-100%",
        }
    }

    const menu = [
        {
            menuClose: "close",
        },
        {
            menuClose: "menu"
        }
    ]

    return (
        <section className="navSection">
            <div className="navbarWrapper">
                <a href="#" onClick={() => setOnClick(!onClick)}>
                    <div className="menuClose">
                        {menu.map((menus, index) => {
                            return <motion.p
                                key={index}
                                variants={buttonVariants}
                                animate="animate"
                                exit="exit"
                            >{menus.menuClose}</motion.p>
                        })}
                    </div>
                </a>
                <AnimatePresence>
                    {onClick &&
                        <>
                            <Menu />
                            <MenuContent />
                        </>
                    }
                </AnimatePresence>
                <a href="#"><img src={logo} /></a>
                <a href="#">let&apos;s talk</a>
            </div>
        </section>
    )
}

export default Navbar