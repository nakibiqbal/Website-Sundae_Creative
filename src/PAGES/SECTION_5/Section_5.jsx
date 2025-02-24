import { useRef, useState, useEffect } from "react";
import "./Section_5.css";
import CustomCursor from "../../CURSOR/CustomCursor";
import { motion } from "framer-motion";
import useClipPathAnimation2 from "../../ANIMATIONS/useClipPathAnimation2";

const Section_5 = () => {
    const sec5WrapperRef = useRef(null);
    const [cursorVis, setCursorVis] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1000);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 1000);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const contentBoxes = [
        { id: 1, spanOne: "SERVICE / 001", titleH4: "integrated communications", spanTwo: "LEARN MORE" },
        { id: 2, spanOne: "SERVICE / 002", titleH4: "influencer marketing", spanTwo: "LEARN MORE" },
        { id: 3, spanOne: "SERVICE / 003", titleH4: "public relations", spanTwo: "LEARN MORE" },
        { id: 4, spanOne: "SERVICE / 004", titleH4: "social media", spanTwo: "LEARN MORE" },
        { id: 5, spanOne: "SERVICE / 005", titleH4: "event planning & production", spanTwo: "LEARN MORE" },
    ];

    const headingVariants = useClipPathAnimation2(); // Get the variants from the hook

    return (
        <section id="section_5">
            <div
                ref={sec5WrapperRef}
                className="sec5_conWrapper"
                onMouseEnter={() => setCursorVis(true)}
                onMouseLeave={() => setCursorVis(false)}
            >
                {contentBoxes.map(({ id, spanOne, titleH4, spanTwo }) => (
                    <div key={id} className="contentBox1">
                        <motion.div
                            initial="hidden" // Set initial state
                            className="contentBox2"
                            whileInView="visible" // Ensure this triggers when in the viewport
                            viewport={{ once: true }} // Trigger animation once when visible
                        >
                            <span>{spanOne}</span>
                            <motion.h4 variants={headingVariants} style={{ width: isSmallScreen ? (id === 1 ? "290px" : "240px") : (id === 1 ? "30vw" : "22vw") }}>{titleH4}</motion.h4>
                            <span>{spanTwo}</span>
                        </motion.div>
                    </div>
                ))}
            </div>

            <CustomCursor sectionRef={sec5WrapperRef} cursorVis={cursorVis} />
        </section>
    );
};

export default Section_5;
