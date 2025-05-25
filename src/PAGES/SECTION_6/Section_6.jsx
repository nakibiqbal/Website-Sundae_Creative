import Dynamic_Section from "../DYNAMIC_SECTION/Dynamic_Section"
import "./Section_6.css"

const Section_6 = () => {
    return (

        <section id="section_6">

            <h6 className="num03">(03)</h6>

            <Dynamic_Section
                reverseContent="reverseContent"
                imgForTheRight="https://ik.imagekit.io/nakibKit/imgLeft.jpg?tr=f-auto,q-auto&updatedAt=1748144178084"
                oneMoreImg="https://ik.imagekit.io/nakibKit/oneMoreImg.jpg?tr=f-auto,q-auto&updatedAt=1748144177888"
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


