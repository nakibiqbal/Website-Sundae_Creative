import Dynamic_Section from "../DYNAMIC_SECTION/Dynamic_Section"
import imgLeft from "/Images/imgLeft.jpg"
import oneMoreImg from "/Images/oneMoreImg.jpg"
import "./Section_6.css"

const Section_6 = () => {
    return (

        <section id="section_6">

            <h6 className="num03">(03)</h6>

            <Dynamic_Section
                reverseContent="reverseContent"
                imgForTheRight={imgLeft}
                oneMoreImg={oneMoreImg}
                imgClassName="imgClassName"
                textForTheLeft="textForTheLeft"
                txtFTLeftEx="txtFTLeftEx"
                numForMobile="(03)"
                text_one="CLIENTS"
                text_two="TELL"
                text_two_2="YOUR STORY"
                text_three="We create and execute innovative communication strategies that shape the digital narratives of today, delivering measurable outcomes and lasting impact for our clients across North America."
                dyConClass6="dyConClass6"
            />

        </section>

    )
}

export default Section_6


