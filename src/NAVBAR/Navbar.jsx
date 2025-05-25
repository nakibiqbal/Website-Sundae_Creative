import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import "./Navbar.css"
import Menu from "./Menu/Menu"
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

    useEffect(() => {
        if (onClick) {
            document.body.style.overflow = 'hidden';
            document.body.style.marginTop = '5rem';
            document.body.style.transition = "all 1s cubic-bezier(0.87, 0, 0.13, 1)"
        } else {
            document.body.style.overflow = 'auto';
            document.body.style.marginTop = '0';
        }
    }, [onClick]);

    return (
        <section className="navSection">
            <div className="navbarWrapper">
                <a href="#" onClick={(e) => { e.preventDefault(); setOnClick(!onClick) }}>
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
                <a href="#" onClick={(e) => e.preventDefault()}><img src="https://ik.imagekit.io/nakibKit/logo.png?tr=f-auto,q-auto&updatedAt=1748144177443" /></a>
                <a href="#" onClick={(e) => e.preventDefault()}>let&apos;s talk</a>
            </div>
        </section>
    )
}

export default Navbar
