import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTransform } from "framer-motion";
import useLargeScreen from "./useLargeScreen";

gsap.registerPlugin(ScrollTrigger);

const useAnimationScroll = (scrollYProgress, sectionRef) => {

    const imgDivRef = useRef(null);
    const imgRef = useRef(null);

    const { isLargeScreen, viewportSize } = useLargeScreen();

    // Convert vw and vh values into pixels
    const toPixels = (value) => {
        if (typeof value === "string" && value.includes("vw")) {
            return (parseFloat(value) / 100) * viewportSize.width;
        }
        if (typeof value === "string" && value.includes("vh")) {
            return (parseFloat(value) / 100) * viewportSize.height;
        }
        return value; // Return number as it is
    };

    // Parallax movement logic
    const ParallaxMovement = (start, end) =>
        useTransform(scrollYProgress, [0, 1], [toPixels(start), toPixels(end)]);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // Logics for GSAP animations
            const imgDiv = imgDivRef.current;
            const imgScale = imgRef.current;
            const section = sectionRef.current;

            gsap.fromTo(
                imgDiv,
                { width: "280px", height: "170px" },
                {
                    width: "100%",
                    height: "100%",
                    ease: [0.11, 0, 0.5, 0],
                    scrollTrigger: {
                        trigger: section,
                        start: "top top",
                        end: "bottom 95%",
                        scrub: true,
                    },
                }
            );
            gsap.fromTo(
                imgScale,
                { scale: 1.5 },
                {
                    scale: 1,
                    ease: [0.11, 0, 0.5, 0],
                    scrollTrigger: {
                        trigger: section,
                        start: "top top",
                        end: "bottom 95%",
                        scrub: true,
                    },
                }
            );
        });

        return () => {
            ctx.revert(); // ✅ Proper GSAP cleanup
        };
    }, []);

    return {
        isLargeScreen,
        imgDivRef,
        imgRef,
        ParallaxMovement,
    };
};

export default useAnimationScroll;