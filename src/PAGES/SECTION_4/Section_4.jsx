import { useRef } from "react"
import Dynamic_Section from "../DYNAMIC_SECTION/Dynamic_Section"
import "./Section_4.css"
import { motion, useScroll } from "framer-motion"
import useAnimationScroll from "../../ANIMATIONS/useAnimationScroll"
import { useClipPathAnimation } from "../../ANIMATIONS/useClipPathAnimation"

const Section_4 = () => {

    const section_4Ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: section_4Ref,
        offset: ["start end", "end start"]
    });
    const { ParallaxMovement } = useAnimationScroll(scrollYProgress, section_4Ref)

    return (
        <>
            <section ref={section_4Ref} id="section_4">

                <h6 className="num02">(02)</h6>
                <div className="absImg1">
                    <motion.img
                        {...useClipPathAnimation}
                        style={{ y: ParallaxMovement(-100, 100) }} loading="lazy" src="https://ik.imagekit.io/nakibKit/smallImage1.jpg?tr=f-auto,q-auto&updatedAt=1748144182774" />
                </div>

                <Dynamic_Section
                    textForTheLeft="textForTheLeft"
                    imgForTheRight="https://ik.imagekit.io/nakibKit/imgRight.jpg?tr=f-auto,q-auto&updatedAt=1748144178224"
                    text_one="SERVICES"
                    text_two="WHAT WE DO"
                    text_three="Our mission is to empower the brands we believe in with tailor-made approaches that ignite creativity and growth without limits."
                    imgForMobile="https://ik.imagekit.io/nakibKit/smallImage1.jpg?tr=f-auto,q-auto&updatedAt=1748144182774"
                    numForMobile="(02)"
                />

            </section>
        </>
    )
}

export default Section_4
