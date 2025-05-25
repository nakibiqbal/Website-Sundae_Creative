import { FlipText } from "../FlipText/FlipText";
import { motion } from "framer-motion";
import "./LeftContent.css"

const LeftContent = () => {
    const transitionAnimate = { duration: 0.5, ease: [0.215, 0.61, 0.355, 1], delay: 0.5, type: "tween" };
    const transitionExit = { duration: 0.5, ease: [0.215, 0.61, 0.355, 1], delay: 0, type: "tween" }
    return (
        <div className="menuLeftContent">
            <motion.img
                initial={{ clipPath: "polygon(0px 0px, 0% 0px, 0% 100%, 0% 100%)" }}
                animate={{ clipPath: "polygon(0px 0px, 100% 0px, 100% 100%, 0% 100%)", transition: transitionAnimate }}
                exit={{ clipPath: "polygon(0px 0px, 0% 0px, 0% 100%, 0% 100%)", transition: transitionExit }}
                src="https://ik.imagekit.io/nakibKit/img1.jpg?tr=f-auto,q-auto&updatedAt=1748144177966" />

            <div className="leftContentBottom">
                <div className="textAnimLeft">
                    <FlipText>work</FlipText>
                    <FlipText>about us</FlipText>
                    <FlipText>let&apos;s talk</FlipText>
                </div>

                <motion.div
                    initial={{ y: 50 }}
                    animate={{ y: 0, transition: transitionAnimate }}
                    exit={{ y: 50, transition: transitionExit }}
                    className="socialMenu">
                    <span>FR</span>
                    <div className="linkInsta">
                        <span><a href="#">INSTAGRAM</a></span>
                        <span><a href="#">LINKEDIN</a></span>
                    </div>
                </motion.div>
            </div>
        </div>

    )
}

export default LeftContent;