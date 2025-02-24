import useAnimationBasic from "../../ANIMATIONS/useAnimationBasic";
import Button from "../../BUTTON/Button";
import ImgSec2 from "./ImageSec2/ImgSec2";
import "./Section_2.css";

const Section_2 = () => {

    const { textRef1 } = useAnimationBasic();

    const text =
        "We narrate the distinctive and captivating stories of some of the world's most desirable brands. Our specialties include public relations, social media management, content creation, and brand partnerships, enabling us to link our clients with leading influencers, media outlets and their target audiences.";

    return (
        <section id="section_2">

            <div className="section2Wrapper">

                <div className="sec2TextButton">

                    <div className="theText2" ref={textRef1}>

                        {text.split(" ").map((word, index) => (
                            <div className="word" key={index}>
                                <h4 className="xyrAnim">{word}</h4>
                            </div>
                        ))}

                    </div>

                    <div className="btn_sec2">
                        <Button btnText="about us" />
                    </div>

                </div>

                <ImgSec2 />
                <div className="sec2BtnTxt">
                    <h6>(001)</h6>
                    <span>Disclaimer: May Cause Brand Awareness</span>
                </div>

            </div>

        </section>
    );
};

export default Section_2;
