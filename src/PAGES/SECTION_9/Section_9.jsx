import Dynamic_Section from "../DYNAMIC_SECTION/Dynamic_Section"
import ninthImg from "/Images/ninthImg.jpg"
import "./Section_9.css"

const Section_9 = () => {
    return (

        <section id="section_9" >

            <h6 className="num04">(04)</h6>

            <Dynamic_Section
                textForTheLeft="textForTheLeft"
                txtFTLeftEx2="txtFTLeftEx2"
                imgForTheRight={ninthImg}
                imgClassName="imgClassName"
                text_one="WORK"
                text_two="WHERE PR,"
                text_two_2="INFLUENCER"
                text_two_3="MARKETING"
                text_two_4="AND DIGITAL STRATEGY"
                text_two_5="CONVERGE"
                text_three="Our agency is dedicated to delivering tangible and measurable results. Being results-driven means setting clear objectives, continuously analyzing data, and adapting strategies to achieve success. We prioritize outcomes that align with our clients' goals, ensuring that our PR efforts contribute directly to their overall success."
                numForMobile="(04)"
                dyConClass9="dyConClass9"
                button="discover all case studies"
            />

        </section>

    )
}

export default Section_9
