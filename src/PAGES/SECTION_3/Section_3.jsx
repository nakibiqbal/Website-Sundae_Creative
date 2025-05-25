import './Section_3.css'
import { motion, useScroll } from 'framer-motion'
import useAnimationScroll from '../../ANIMATIONS/useAnimationScroll'
import { useRef } from 'react'
import useAnimationBasic from '../../ANIMATIONS/useAnimationBasic'

const Section_3 = () => {

    const sectionThreeRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionThreeRef,
        offset: ["start end", "end start"]
    });

    const { ParallaxMovement } = useAnimationScroll(scrollYProgress, sectionThreeRef);
    const { textRef1, textRef2, textRef3 } = useAnimationBasic();

    const text1 =
        "We redefine the conventional norms of PR, offering a fresh, forward-thinking perspective as your agency partner.";

    const text2 =
        "we envision, craft, and execute groundbreaking communication strategies.";

    const text3 =
        "We pride ourselves on delivering high-quality, result-driven campaigns that authentically connect with audiences and drive business success.";


    return (

        <section ref={sectionThreeRef} id="section_3">
            <div className="imageThree">
                <motion.img style={{ y: ParallaxMovement(-150, 150), scale: 1.2 }} loading='lazy' src="https://ik.imagekit.io/nakibKit/bgImg.jpg?tr=f-auto,q-auto&updatedAt=1748144179308" />
            </div>

            <div className="content_wrapper">
                <div className="contentTop3">
                    <h1>WHERE <br /> INFLUENCE</h1>

                    <div ref={textRef1} className="word sec3span" >
                        {text1.split(" ").map((word, index) => (
                            <span key={index} className='xyrAnim'>{word}</span>
                        ))}
                    </div>

                </div>

                <div className="contentBottom3">
                    <div className="h1_span1">

                        <div ref={textRef2} className="word sec3span" >
                            {text2.split(" ").map((word, index) => (
                                <span key={index} className='xyrAnim'>{word}</span>
                            ))}
                        </div>

                        <h1>INTERSECT</h1>
                    </div>
                    <div className="h1_span2">
                        <h1>AND <br /> IMPACT</h1>

                        <div ref={textRef3} className="word sec3span" >
                            {text3.split(" ").map((word, index) => (
                                <span key={index} className='xyrAnim'>{word}</span>
                            ))}
                        </div>

                    </div>
                </div>
            </div>

        </section>

    )
}

export default Section_3
