import useAnimationBasic from "../../ANIMATIONS/useAnimationBasic";
import Button from "../../BUTTON/Button";
import "./Section_2.css";


const Section_2 = () => {

    const { textRef } = useAnimationBasic()

    const text =
        "We narrate the distinctive and captivating stories of some of the world's most desirable brands. Our specialties include public relations, social media management, content creation, and brand partnerships, enabling us to link our clients with leading influencers, media outlets and their target audiences.";

    return (
        <section id="section_2">
            <div className="section2Wrapper">
                <div className="sec2TextButton">
                    <div className="theText2" ref={textRef}>
                        {text.split(" ").map((word, index) => (
                            <div className="word" key={index}>
                                <p>{word}</p>
                            </div>
                        ))}
                    </div>

                    <Button />
                </div>
            </div>
        </section>
    );
};

export default Section_2;
