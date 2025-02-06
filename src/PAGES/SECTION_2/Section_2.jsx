import useAnimationBasic from "../../ANIMATIONS/useAnimationBasic";
import Button from "../../BUTTON/Button";
import "./Section_2.css"
import { motion } from "framer-motion"

const Section_2 = () => {
    const { variants } = useAnimationBasic();

    const text =
        "We narrate the distinctive and captivating stories of some of the world's most desirable brands. Our specialties include public relations, social media management, content creation, and brand partnerships, enabling us to link our clients with leading influencers, media outlets and their target audiences.";

    return (
        <>
            <section id="section_2">
                <div className="section2Wrapper">

                    <div className="sec2TextButton">
                        <div className="theText2">
                            {text.split(" ").map((word, index) => (
                                <div className="word" key={index}>
                                    <motion.p
                                        variants={variants}
                                        initial="initial"
                                        whileInView="view"
                                        viewport={{ once: true }}
                                        custom={index}
                                        transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1], type: "tween", delay: index * 0.02 }}
                                    >
                                        {word}
                                    </motion.p>
                                </div>
                            ))}
                        </div>

                        <Button />

                    </div>

                </div>
            </section>
        </>
    )
}

export default Section_2
