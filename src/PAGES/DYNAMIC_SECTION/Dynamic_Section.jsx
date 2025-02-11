/* eslint-disable react/prop-types */
import "./Dynamic_Section.css"
import { motion, useScroll } from "framer-motion"
import useAnimationScroll from "../../ANIMATIONS/useAnimationScroll";
import { useRef } from "react";


const Dynamic_Section = ({ textForTheLeft, imgForTheRight, text_one, text_two, text_three, imgForMobile, numForMobile }) => {

    const imgMob = useRef(null);
    const { scrollYProgress } = useScroll({
        target: imgMob,
        offset: ["start end", "end start"]
    });

    const { ParallaxMovement } = useAnimationScroll(scrollYProgress, imgMob)


    return (
        <div ref={imgMob} className="dynamicContentWrapper">

            <div className="dynamicContentLeft">
                {textForTheLeft && <div className={textForTheLeft}>
                    {imgForMobile && <motion.img className="imgForMobile" style={{ x: ParallaxMovement(-100, 100) }} src={imgForMobile} />}
                    {numForMobile && <h6 className="num02Mob">{numForMobile}</h6>}
                    <span>{text_one}</span>
                    <h3>{text_two}</h3>
                    <h5>{text_three}</h5>
                </div>}
                {/* <div className="imgForLeft">
                    <img src="___" />
                </div> */}
            </div>

            <div className="dynamicContentRight">
                {/* <div className="textForRight">
                    <span>SERVICE</span>
                    <h3>WHAT WE DO</h3>
                    <p>Our mission is to empower the brands we believe in with tailor-made approaches that ignite creativity and growth without limits.</p>
                </div> */}
                {imgForTheRight && <div className="imgForTheRight">
                    <img src={imgForTheRight} />
                </div>
                }
            </div>

        </div>

    )
}

export default Dynamic_Section
