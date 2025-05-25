/* eslint-disable react/prop-types */
import "./Dynamic_Section.css"
import { motion, useScroll } from "framer-motion"
import useAnimationScroll from "../../ANIMATIONS/useAnimationScroll";
import { useRef } from "react";
import Button from "../../BUTTON/Button";
import { useClipPathAnimation } from "../../ANIMATIONS/useClipPathAnimation";
import useClipPathAnimation2 from "../../ANIMATIONS/useClipPathAnimation2";


const Dynamic_Section = (
    {
        textForTheLeft,
        imgForTheRight,
        text_one,
        text_two,
        text_three,
        imgForMobile,
        numForMobile,
        reverseContent,
        text_two_2,
        text_two_3,
        text_two_4,
        text_two_5,
        imgClassName,
        dyConClass6,
        dyConClass9,
        txtFTLeftEx,
        txtFTLeftEx2,
        oneMoreImg,
        button

    }) => {

    const imgMob = useRef(null);
    const { scrollYProgress } = useScroll({
        target: imgMob,
        offset: ["start end", "end start"]
    });

    const { ParallaxMovement } = useAnimationScroll(scrollYProgress, imgMob)
    const headingVariants = useClipPathAnimation2();

    return (
        <div ref={imgMob} className={reverseContent ? `dynamicContentWrapper ${reverseContent}` : "dynamicContentWrapper"}>

            <div
                className={dyConClass6 ? `dynamicContentLeft ${dyConClass6}` : dyConClass9 ? `dynamicContentLeft ${dyConClass9}` : "dynamicContentLeft"}>
                {textForTheLeft && <div className={txtFTLeftEx ? `${textForTheLeft} ${txtFTLeftEx}` : txtFTLeftEx2 ? `${textForTheLeft} ${txtFTLeftEx2}` : textForTheLeft}>
                    {imgForMobile && <motion.img {...useClipPathAnimation} loading="lazy" className="imgForMobile" style={{ x: ParallaxMovement(-100, 100) }} src={imgForMobile} />}
                    {numForMobile && <h6 className="num02Mob">{numForMobile}</h6>}
                    <span>{text_one}</span>

                    <motion.div
                        className="head3"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.h3 variants={headingVariants}>{text_two}</motion.h3>
                        {[text_two_2, text_two_3, text_two_4, text_two_5].map((text, index) => text && <motion.h3 key={index} variants={headingVariants}>{text}</motion.h3>)}
                    </motion.div>
                    <motion.h5
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 1.5, ease: [0.22, 1, 0.36, 1]
                        }}
                    >
                        {text_three}
                    </motion.h5>
                    {button && <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 1.5, ease: [0.22, 1, 0.36, 1]
                        }}
                        className="dynamicButton"> <Button btnText={button} /> </motion.div>}
                </div>}

            </div>

            <div className={dyConClass6 ? `dynamicContentRight ${dyConClass6}` : dyConClass9 ? `dynamicContentRight ${dyConClass9}` : "dynamicContentRight"}>

                {imgForTheRight && <div className={imgClassName ? `imgForTheRight ${imgClassName}` : "imgForTheRight"}>
                    <img src={imgForTheRight} />
                </div>}
                {oneMoreImg && <motion.img className="oneMoreImg"
                    loading="lazy"
                    {...useClipPathAnimation}
                    src={oneMoreImg} />}

            </div>

        </div>
    )
}

export default Dynamic_Section