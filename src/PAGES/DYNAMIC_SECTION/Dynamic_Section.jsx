/* eslint-disable react/prop-types */
import "./Dynamic_Section.css"
import { motion, useScroll } from "framer-motion"
import useAnimationScroll from "../../ANIMATIONS/useAnimationScroll";
import { useRef } from "react";


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
        imgClassName,
        dyConClass6,
        txtFTLeftEx,
        oneMoreImg

    }) => {

    const imgMob = useRef(null);
    const { scrollYProgress } = useScroll({
        target: imgMob,
        offset: ["start end", "end start"]
    });

    const { ParallaxMovement } = useAnimationScroll(scrollYProgress, imgMob)


    return (
        <div ref={imgMob} className={reverseContent ? `dynamicContentWrapper ${reverseContent}` : "dynamicContentWrapper"}>

            <div className={dyConClass6 ? `dynamicContentLeft ${dyConClass6}` : "dynamicContentLeft"}>

                {textForTheLeft && <div className={txtFTLeftEx ? `${textForTheLeft} ${txtFTLeftEx}` : textForTheLeft}>
                    {imgForMobile && <motion.img className="imgForMobile" style={{ x: ParallaxMovement(-100, 100) }} src={imgForMobile} />}
                    {numForMobile && <h6 className="num02Mob">{numForMobile}</h6>}
                    <span>{text_one}</span>
                    <div className="head3">
                        <h3>{text_two}</h3>
                        {text_two_2 && <h3>{text_two_2}</h3>}
                    </div>
                    <h5>{text_three}</h5>
                </div>}

            </div>

            <div className={dyConClass6 ? `dynamicContentRight ${dyConClass6}` : "dynamicContentRight"}>

                {imgForTheRight && <div className={imgClassName ? `imgForTheRight ${imgClassName}` : "imgForTheRight"}>
                    <img src={imgForTheRight} />
                </div>}
                {oneMoreImg && <img className="oneMoreImg" src={oneMoreImg} />}

            </div>

        </div>

    )
}

export default Dynamic_Section
