import { AnimatePresence, motion } from "framer-motion"
import "./Buttons.css"
import { useState } from "react";
const Buttons = () => {

    const [selected, setSelected] = useState(2)

    const variant1 = {
        initial: {
            y: -180,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            rotate: -15,
        },
        hovered: {
            y: 0,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            rotate: 0,
        },
    };

    const variantForText1 = {
        initial: {
            opacity: 1,
            rotate: 0,
            y: 0,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
        hovered: {
            opacity: [0.5, 0, 0],
            rotate: [0, 3, -10],
            y: [5, 20, -40],
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        }
    }
    const variantForText2 = {
        initial: {
            rotate: -10,
            y: -30,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            opacity: 0,
        },
        hovered: {
            rotate: 0,
            y: 0,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            opacity: 1,
        }
    }

    const btnContents = [
        {
            id: 1,
            text1: "Let's start a project",
            text2: "new buisness",
            email: "info@sundaecreative.com",
        },
        {
            id: 2,
            text1: "drop usa line",
            text2: `influencer's`,
            email: "info@sundaecreative.com",
        },
        {
            id: 3,
            text1: "apply now",
            text2: "join our #team",
            email: "careers@sundaecreative.com",
        }
    ]

    const handleClick = (id) => {
        setSelected(id);
    };

    const selectedMail = btnContents.find(item => item.id === selected);

    return (

        <>
            <div className="threeBtn">


                {btnContents.map((item) => (
                    <motion.div
                        initial="initial"
                        whileHover="hovered"
                        className={`threeBtn_childs ${selected === item.id ? "selected" : ""}`}
                        key={item.id}
                        onClick={() => handleClick(item.id)}
                        style={{
                            cursor: "pointer",
                        }}
                    >
                        <motion.div
                            variants={variant1}
                            transition={{
                                duration: 0.8,
                                ease: [0.87, 0, 0.13, 1]
                            }}
                            className="foot_btnTxt">
                            {item.text1.split(" ").map((word, index) => (
                                <div key={index} className="parent_h4">
                                    <motion.h4
                                        transition={{
                                            duration: 1.7,
                                            ease: [0, 0.55, 0.45, 1],
                                        }}
                                        variants={variantForText2}
                                    >{word}</motion.h4>
                                </div>))}
                        </motion.div>
                        <div
                            className="foot_btnTxt">
                            {item.text2.split(" ").map((word, index) => (
                                <div key={index} className="parent_h4">
                                    <motion.h4
                                        transition={{
                                            duration: 1.2,
                                            ease: [0.87, 0, 0.13, 1]
                                        }}
                                        variants={variantForText1}
                                    >{word}</motion.h4>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}

            </div>

            <div className="clicky_info">
                <AnimatePresence mode='wait'>
                    <motion.a
                        key={selectedMail.id}
                        initial={{ y: -30, rotate: -8, }}
                        animate={{ y: 0, rotate: 0 }}
                        exit={{ y: 40, rotate: 8 }}
                        transition={{
                            duration: 0.3,
                            ease: "linear",
                        }}
                        href={`mailto:${selectedMail?.email}`}
                    >
                        {selectedMail?.email}
                    </motion.a>
                </AnimatePresence>
            </div>

        </>

    )
}

export default Buttons
