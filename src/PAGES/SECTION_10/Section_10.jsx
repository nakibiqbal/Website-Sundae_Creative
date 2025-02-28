/* eslint-disable react-hooks/rules-of-hooks */
import './Section_10.css';
import useLargeScreen from "../../ANIMATIONS/useLargeScreen"
import CustomCursor from '../../CURSOR/CustomCursor';
import { useRef, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import useAnimationBasic from '../../ANIMATIONS/useAnimationBasic';
import useAnimationScroll from '../../ANIMATIONS/useAnimationScroll';
import useClipPathAnimation2 from '../../ANIMATIONS/useClipPathAnimation2';

const Section_10 = () => {

    const section10Ref = useRef(null);
    const [cursorVis, setCursorVis] = useState(false);
    const { isLargeScreen } = useLargeScreen();

    const { scrollYProgress } = useScroll({
        target: section10Ref,
        offset: ["start start", "end end"]
    });
    const { ParallaxMovement } = useAnimationScroll(scrollYProgress, section10Ref);
    const headingVariants = useClipPathAnimation2()

    const contentData = [
        {
            img: "https://sundaecreative.com/uploads/case-studies/The_boys/The_boys_1_900_1290-450x645.png",
            bigTitle: "amazon prime video “The Boys” activation vip event",
            smallTitle: "event planning & production",
            button: "view full case study"
        },
        {
            img: "https://sundaecreative.com/uploads/case-studies/steve_madden/1_900_Medium_image-900x1290.jpg",
            bigTitle: "Steve Madden Canadian Collection Launch: Made to Move",
            smallTitle: "influencer marketing",
            button: "view full case study"
        },
        {
            img: "https://sundaecreative.com/uploads/case-studies/Dulcedo/Dulcedo_header_900_1290-900x1290.png",
            bigTitle: "Dulcedo Models: Model Search",
            smallTitle: "social media",
            button: "view full case study"
        },
        {
            img: "https://sundaecreative.com/uploads/case-studies/Loreal/Loreal_hero_image-900x1290.jpg",
            bigTitle: "L’Oreal Luxe Trend Hacking",
            smallTitle: "influencer marketing",
            button: "view full case study"
        },
        {
            img: "https://sundaecreative.com/uploads/case-studies/miele/1_900_Medium_image-900x1290.jpg",
            bigTitle: "Miele Experience Centre Opening at CF Sherway Gardens, Toronto",
            smallTitle: "event planning & production",
            button: "view full case study"
        },
        {
            img: "https://sundaecreative.com/uploads/case-studies/favuzzi/1_900_Medium_image-900x1290.jpg",
            bigTitle: "Favuzzi Quebec Market Launch, Montreal",
            smallTitle: "event planning & production",
            button: "view full case study"
        }
    ]

    return (
        <section
            onMouseEnter={() => setCursorVis(true)}
            onMouseLeave={() => setCursorVis(false)}
            ref={section10Ref} id="section_10">

            <motion.div
                style={{
                    y: ParallaxMovement(0, -200)
                }}
                className="sticConWrapper">
                {contentData.map((content, index) => {
                    const { isHovered, variants, mouseEnter, mouseLeave } = useAnimationBasic();
                    return (
                        <motion.div
                            key={index}
                            style={{
                                position: 'sticky',
                                top: isLargeScreen ? `${index * 15}vh` : 0,
                            }}
                            animate="buttonAnim"
                            onMouseEnter={mouseEnter}
                            onMouseLeave={mouseLeave}
                            className="sticContent">

                            <div className="stickConChild">
                                <div className="imgNum">
                                    <div className="img10Parent">
                                        <img src={content.img} alt="img" />
                                    </div>
                                    <span>0{index + 1}</span>
                                </div>

                                <div className="txtBtnContent">
                                    <motion.h4
                                        variants={headingVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                    >{content.bigTitle}</motion.h4>
                                    <div className="btns">
                                        <span>{content.smallTitle}</span>
                                        <div className="theB">


                                            {/* button */}
                                            <div
                                                className="buttonContainer"
                                            >
                                                {[1, 2].map((_, index) => {
                                                    return <motion.div key={index} variants={variants}
                                                        custom={index}
                                                        transition={{
                                                            duration: 1,
                                                            ease: [0.25, 1, 0.5, 1],
                                                        }}
                                                        className="buttonBG"></motion.div>
                                                })}
                                                <div className="button">
                                                    {[1, 2].map((_, index) => {
                                                        return <motion.button
                                                            key={index}
                                                            variants={variants}
                                                            transition={{
                                                                duration: 1,
                                                                ease: [0.25, 1, 0.5, 1],
                                                            }}
                                                            style={{
                                                                opacity: isHovered
                                                                    ? index === 1
                                                                        ? 0
                                                                        : 1
                                                                    : index === 1
                                                                        ? 1
                                                                        : 0, transition: "opacity 0.1s ease-in-out"
                                                            }}
                                                        >
                                                            view full case study
                                                        </motion.button>
                                                    })}
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>

                        </motion.div>

                    );
                })}

            </motion.div>

            <CustomCursor sectionRef={section10Ref} cursorVis={cursorVis} />

        </section>
    );
};

export default Section_10;

