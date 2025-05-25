import useAnimationBasic from "../../ANIMATIONS/useAnimationBasic";
import { useClipPathAnimation } from "../../ANIMATIONS/useClipPathAnimation";
import "./Section_8.css";
import { motion } from "framer-motion";

const Section_8 = () => {
    const { textRef1 } = useAnimationBasic();
    const text = "“Sundae Creative is a trailblazer in influencer marketing, connecting brands with influential voices across social media to build impactful messages.”"
    return (
        <section id="section_8">
            <div className="contentWrapper8">

                <div className="imgRight8">
                    <motion.img {...useClipPathAnimation} loading="lazy" src="https://sundaecreative.com/uploads/pages/home/14_450_Small_image-450w.jpg" />
                </div>

                <div className="mainContent8">

                    <div className="leftImg8">
                        <img src="https://sundaecreative.com/uploads/pages/home/13_450_Small_image-450w.jpg" loading="lazy" />
                    </div>
                    <div className="textFounder">
                        <div ref={textRef1} className="parentForTxt">
                            {text.split(" ").map((word, index) => (
                                <div className="word for8" key={index}>
                                    <h3 className="xyrAnim">{word}</h3>
                                </div>
                            ))}
                        </div>
                        <div className="founder">
                            <motion.img {...useClipPathAnimation} loading="lazy" src="https://sundaecreative.com/uploads/attachments/quote/16_Quote_Kristina_450_Small_image-450w.jpg" />
                            <div className="founderInfo">
                                <span>Kristina Argento</span>
                                <span>Co-founder</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Section_8
