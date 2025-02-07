import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const useAnimationBasic = () => {
  const [isHovered, setIsHovered] = useState(false);
  const textRef = useRef(null);

  const mouseEnter = () => setIsHovered(true);
  const mouseLeave = () => setIsHovered(false);

  // FramerMotion
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

  // GreenSockAnimation
  useEffect(() => {
    // Make sure the textRef is properly populated
    if (!textRef.current) return;

    // Create a GSAP context for scoping animations
    let ctx = gsap.context(() => {
      const words = textRef.current.querySelectorAll(".word p");

      // GSAP animation setup
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
            trigger: textRef.current,
            start: "top 80%",
            end: "bottom 60%",
            once: true, // Ensures the animation only triggers once during scroll
          },
        }
      );
    }, textRef); // Here we pass textRef as the scope for the context

    return () => ctx.revert(); // Cleanup GSAP animations
  }, []); // Empty dependency array ensures this effect runs only once

  return {
    mouseEnter,
    mouseLeave,
    variants,
    isHovered,
    textRef
  };
};

export default useAnimationBasic;
