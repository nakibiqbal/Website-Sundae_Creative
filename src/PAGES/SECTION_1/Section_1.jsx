import { Suspense, useRef, lazy } from "react";
import { motion, useScroll } from "framer-motion";
import "./Section_1.css";
import useAnimationScroll from "../../ANIMATIONS/useAnimationScroll";
import { useClipPathAnimation } from "../../ANIMATIONS/useClipPathAnimation";
import FallbackLogic from "../../FallbackLogic";
// import FancyText from "./FancyTexts/FancyText";
// import BottomContent from "./BottomContents/BottomContent";

const FancyText = lazy(() => import("./FancyTexts/FancyText"));
const BottomContent = lazy(() => import("./BottomContents/BottomContent"));

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
                        <img ref={imgRef} src="https://ik.imagekit.io/nakibKit/img2.jpg?tr=f-auto,q-auto&updatedAt=1748144178322" loading="lazy" />
                    </motion.div>
                </div>
            </div>

            <div className="sec1Wrapper">

                <Suspense fallback={<FallbackLogic />}>
                    <FancyText ParallaxMovement={ParallaxMovement} isLargeScreen={isLargeScreen} />
                </Suspense>
                <Suspense fallback={<FallbackLogic />}>
                    <BottomContent ParallaxMovement={ParallaxMovement} isLargeScreen={isLargeScreen} />
                </Suspense>
            </div>

        </section>
    );
};

export default Section_1;