import Button from "../BUTTON/Button"
import "./ExtraContact.css"

const ExtraContact = () => {
    return (
        <>
            <div className="foot1">

                <div className="socialWrapper">
                    <div className="inboxContent">
                        <h3>content delivered to your inbox</h3>
                        <div className="mailSub">
                            <input type="email" name="email" id="email" placeholder="ENTER YOUR MAIL" />
                            <div className="footMailBtn">
                                <Button btnText="subscribe" />
                            </div>
                        </div>
                    </div>
                    <div className="socialContent">

                        <div className="socials">
                            <div className="insta_linked">
                                <div className="il">
                                    <Button btnText="instagram" />
                                </div>
                                <div className="il">
                                    <Button btnText="linkedin" />
                                </div>
                            </div>
                            <span>fr</span>
                        </div>

                        <div className="locations">
                            <div className="location">
                                <h3>montreal</h3>
                                <span>438 McGill street #200
                                    <br />
                                    Montreal, Quebec
                                    <br />
                                    H2Y 2G1</span>
                            </div>
                            <div className="location">
                                <h3>toronto</h3>
                                <span>67 Mowat Avenue #433
                                    <br />
                                    Toronto, Ontario
                                    <br />
                                    M6K 3E3</span>
                            </div>
                            <div className="location">
                                <h3>los angeles</h3>
                                <span>407 N. Maple Drive, Ground 1
                                    <br />
                                    Beverly Hills, CA
                                    <br />
                                    90210
                                </span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}

export default ExtraContact
