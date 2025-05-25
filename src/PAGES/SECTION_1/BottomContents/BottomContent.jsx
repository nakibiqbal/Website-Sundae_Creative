/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import './BottomContent.css';

const BottomContent = ({ isLargeScreen, ParallaxMovement }) => {
    return (
        <motion.div
            initial={{ opacity: isLargeScreen ? 0 : 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: isLargeScreen ? 1.25 : 0, ease: [0.86, 0, 0.07, 1] }}
            className="conOFsec1TWO">

            <motion.span
                style={{
                    x: isLargeScreen ? ParallaxMovement(0, -200) : 0,
                    opacity: isLargeScreen ? ParallaxMovement(1, 0) : 1,
                }}
            >
                We strategically connect brands with audiences
            </motion.span>
            <motion.img
                initial={{ clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)", }}
                animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", }}
                transition={{ duration: 1.25, delay: isLargeScreen ? 0.5 : 0, ease: [0.86, 0, 0.07, 1] }}
                className="bottomImg"
                src="https://ik.imagekit.io/nakibKit/img2.jpg?tr=f-auto,q-auto&updatedAt=1748144178322"
            />
            <motion.span
                style={{
                    x: isLargeScreen ? ParallaxMovement(0, 200) : 0,
                    opacity: isLargeScreen ? ParallaxMovement(1, 0) : 1,
                }}
            >
                who provoke, inspire and convert
            </motion.span>

        </motion.div>
    )
}

export default BottomContent
