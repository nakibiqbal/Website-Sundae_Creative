import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTransform } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const useAnimations = (scrollYProgress, sectionRef) => {
    const imgDivRef = useRef(null);
    const imgRef = useRef(null);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1000);

    useEffect(() => {
        // Logic for checking screen size
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1000);
        };
        window.addEventListener("resize", handleResize);
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

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });
    // Logic for parallax movement
    const ParallaxMovement = (start, end) => useTransform(scrollYProgress, [0, 1], [start, end]);
    // Return values
    return { isLargeScreen, imgDivRef, imgRef, ParallaxMovement };
};

export default useAnimations;