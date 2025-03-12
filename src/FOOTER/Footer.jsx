import Buttons from "./Buttons"
import ExtraContact from "./ExtraContact";
import "./Footer.css"
import { FiArrowUpRight } from "react-icons/fi";
const Footer = () => {

    return (
        <section id="footer">
            <div className="footerWrapper">

                <div className="foot1">
                    <h2>say hi or bonjour</h2>
                    <span>
                        Which topic do you want to discuss with us?
                    </span>
                    <Buttons />
                </div>

                <div className="foot1">
                    <h4>talent representation </h4>
                    <div className="dulWeb">
                        <div className="dulWebChild">
                            <span>go to dulcedo&apos;s website</span>
                            <span className="icon"><FiArrowUpRight /></span>
                        </div>
                    </div>
                </div>

                <ExtraContact />

            </div>
        </section >
    )
}

export default Footer
