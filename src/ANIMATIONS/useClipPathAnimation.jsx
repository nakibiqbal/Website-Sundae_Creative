export const useClipPathAnimation = {
    initial: { clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)" },
    whileInView: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
    transition: { duration: 1.25, ease: [0.86, 0, 0.07, 1] },
    viewport: { once: true },
}