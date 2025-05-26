/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import './CustomCursor.css'
import gsap from 'gsap';
const CustomCursor = ({ sectionRef, cursorVis }) => {
    // const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const cursorRef = useRef(null)
    useEffect(() => {
        const wrapper = sectionRef.current;
        const xMove = gsap.quickTo(cursorRef.current, "left", { duration: 0.8, ease: "power3" })
        const yMove = gsap.quickTo(cursorRef.current, "top", { duration: 0.8, ease: "power3" })

        const handleMove = (e) => {
            const { clientX, clientY } = e;
            xMove(clientX);
            yMove(clientY);
        }

        wrapper.addEventListener("mousemove", handleMove);
        return () => wrapper.removeEventListener("mousemove", handleMove);

    }, [cursorVis, sectionRef]);

    return (
        <motion.div
            className="customCursor"
            ref={cursorRef}
            aria-hidden="true"
            animate={{
                opacity: cursorVis ? 1 : 0,
            }}
            transition={{
                duration: 0.8,
                ease: [0.215, 0.61, 0.355, 1]
            }}
        />
    )
}

export default CustomCursor
