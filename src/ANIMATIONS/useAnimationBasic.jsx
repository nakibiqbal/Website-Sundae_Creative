import { useState } from "react";

const useAnimationBasic = () => {
  const [isHovered, setIsHovered] = useState(false);

  const mouseEnter = () => setIsHovered(true);
  const mouseLeave = () => setIsHovered(false);

  const variants = {
    initial: {
      // y: -50,
      // rotate: -5,
      // x: -10,
      y: 0,
      rotate: 0,
      x: 0,
      visibility: "visible",
    },
    view: {
      y: 0,
      rotate: 0,
      x: 0,
      visibility: "visible",
    },
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

  return {
    mouseEnter,
    mouseLeave,
    variants,
    isHovered,
  };
};

export default useAnimationBasic;
