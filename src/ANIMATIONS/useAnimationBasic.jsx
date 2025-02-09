import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const useAnimationBasic = () => {
  const [isHovered, setIsHovered] = useState(false);
  const textRefs = [useRef(null), useRef(null), useRef(null)]; // Store refs in an array

  const mouseEnter = () => setIsHovered(true);
  const mouseLeave = () => setIsHovered(false);

  // Framer Motion Variants
  const variants = {
    buttonAnim: (index) => ({
      y: isHovered ? 0 : "-100%",
      clipPath:
        isHovered && index === 0
          ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
          : index === 0
            ? "polygon(0 0, 100% 0, 100% 0, 0 0)"
            : "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      rotate: isHovered && index === 0 ? 0 : index === 0 ? -5 : 0,
    }),
  };

  // Scoped GSAP Animation
  useEffect(() => {
    textRefs.forEach((ref) => {
      if (ref.current) {
        let ctx = gsap.context(() => {
          const words = ref.current.querySelectorAll(".xyrAnim");

          gsap.fromTo(
            words,
            {
              y: -50,
              rotate: -5,
              x: -10,
              visibility: "hidden",
            },
            {
              y: 0,
              rotate: 0,
              x: 0,
              visibility: "visible",
              duration: 1,
              ease: "power4.out",
              stagger: 0.02,
              scrollTrigger: {
                trigger: ref.current,
                start: "top 80%",
                end: "bottom 60%",
                once: true,
              },
            }
          );
        }, ref); // 👈 **THIS is the scope!**

        return () => ctx.revert(); // Clean up GSAP animations for this ref
      }
    });
  }, []); // Runs once on mount

  return {
    mouseEnter,
    mouseLeave,
    variants,
    isHovered,
    textRef1: textRefs[0],
    textRef2: textRefs[1],
    textRef3: textRefs[2],
  };
};

export default useAnimationBasic;
