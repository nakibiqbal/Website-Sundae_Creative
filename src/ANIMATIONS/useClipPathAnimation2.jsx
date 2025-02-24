const useClipPathAnimation2 = () => {
    const headingVariants = {
        hidden: {
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", // Initially hidden (top)
            rotate: -5,
            y: -40,
            x: -40,
        },
        visible: {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // Reveal downwards
            rotate: 0,
            y: 0,
            x: 0,
            transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return headingVariants;
}

export default useClipPathAnimation2
