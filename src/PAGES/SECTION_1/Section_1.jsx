import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import "./Section_1.css";
import img2 from "/Images/img2.jpg";
import FancyText from "./FancyTexts/FancyText";
import BottomContent from "./BottomContents/BottomContent";
import useAnimationScroll from "../../ANIMATIONS/useAnimationScroll";
import { useClipPathAnimation } from "../../ANIMATIONS/useClipPathAnimation";

const Section_1 = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start", "end"],
    });
    // custom hook for animations
    const { isLargeScreen, imgDivRef, imgRef, ParallaxMovement } = useAnimationScroll(scrollYProgress, sectionRef);

    return (
        <section ref={sectionRef} id="section1">

            <div className="conOFsec1THREE">
                <div className="stickImg">
                    <motion.div
                        {...useClipPathAnimation}
                        ref={imgDivRef} style={{ overflow: "hidden" }}>
                        <img ref={imgRef} src={img2} />
                    </motion.div>
                </div>
            </div>

            <div className="sec1Wrapper">
                <FancyText ParallaxMovement={ParallaxMovement} isLargeScreen={isLargeScreen} />
                <BottomContent ParallaxMovement={ParallaxMovement} isLargeScreen={isLargeScreen} />
            </div>

        </section>
    );
};

export default Section_1;