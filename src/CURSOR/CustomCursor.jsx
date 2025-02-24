/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './CustomCursor.css'
const CustomCursor = ({ sectionRef, cursorVis }) => {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const wrapper = sectionRef.current;
        if (!wrapper) return;
        const handleMove = (e) => {
            const rect = wrapper.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setCursorPos({ x, y });
        };

        wrapper.addEventListener("mousemove", handleMove);
        return () => wrapper.removeEventListener("mousemove", handleMove);
    }, []);

    return (
        <motion.div
            className="customCursor"
            aria-hidden="true"
            animate={{
                left: cursorPos.x + 15,
                top: cursorPos.y + 15,
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
