/* eslint-disable react/prop-types */
import "./Dynamic_Section.css"
import { motion, useScroll } from "framer-motion"
import useAnimationScroll from "../../ANIMATIONS/useAnimationScroll";
import { useRef } from "react";
import Button from "../../BUTTON/Button";


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


    return (
        <div ref={imgMob} className={reverseContent ? `dynamicContentWrapper ${reverseContent}` : "dynamicContentWrapper"}>

            <div
                className={dyConClass6 ? `dynamicContentLeft ${dyConClass6}` : dyConClass9 ? `dynamicContentLeft ${dyConClass9}` : "dynamicContentLeft"}>
                {textForTheLeft && <div className={txtFTLeftEx ? `${textForTheLeft} ${txtFTLeftEx}` : txtFTLeftEx2 ? `${textForTheLeft} ${txtFTLeftEx2}` : textForTheLeft}>
                    {imgForMobile && <motion.img className="imgForMobile" style={{ x: ParallaxMovement(-100, 100) }} src={imgForMobile} />}
                    {numForMobile && <h6 className="num02Mob">{numForMobile}</h6>}
                    <span>{text_one}</span>
                    <div className="head3">
                        <h3>{text_two}</h3>
                        {text_two_2 && <h3>{text_two_2}</h3>}
                        {text_two_3 && <h3>{text_two_3}</h3>}
                        {text_two_4 && <h3>{text_two_4}</h3>}
                        {text_two_5 && <h3>{text_two_5}</h3>}
                    </div>
                    <h5>{text_three}</h5>
                    {button && <div className="dynamicButton"> <Button btnText={button} /> </div>}
                </div>}

            </div>

            <div className={dyConClass6 ? `dynamicContentRight ${dyConClass6}` : dyConClass9 ? `dynamicContentRight ${dyConClass9}` : "dynamicContentRight"}>

                {imgForTheRight && <div className={imgClassName ? `imgForTheRight ${imgClassName}` : "imgForTheRight"}>
                    <img src={imgForTheRight} />
                </div>}
                {oneMoreImg && <img className="oneMoreImg" src={oneMoreImg} />}

            </div>

        </div>
    )
}

export default Dynamic_Section
