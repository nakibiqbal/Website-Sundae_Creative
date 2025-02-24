import { FlipText } from "../FlipText/FlipText"
import "./RightContent.css"

const RightContent = () => {
    const rightContents = [
        {
            number: "(001)",
            textOne: "integrated",
            textTwo: "communications",
        },
        {
            number: "(002)",
            textOne: "influencer",
            textTwo: "marketing",
        },
        {
            number: "(003)",
            textOne: "public",
            textTwo: "relations",
        },
        {
            number: "(004)",
            textOne: "social",
            textTwo: "media",
        },
        {
            number: "(005)",
            textOne: "evant",
            textTwo: "planning",
            textThree: "&",
            textFour: "production",
        },
    ]

    return (
        <div className="menuRightContent">
            {rightContents.map((rightContent, index) => {
                const { number, textOne, textTwo, textThree, textFour } = rightContent;
                return <div key={index} className="rightContent">
                    <FlipText classTwo="number">{number}</FlipText>
                    <div className="rightText">
                        {textOne && <FlipText classOne="forRight" classTwo="rotateForRight">{textOne}</FlipText>}
                        {textTwo && <FlipText classOne="forRight" classTwo="rotateForRight">{textTwo}</FlipText>}
                        {textThree && <FlipText classOne="forRight" classTwo="rotateForRight">{textThree}</FlipText>}
                        {textFour && <FlipText classOne="forRight" classTwo="rotateForRight">{textFour}</FlipText>}
                    </div>
                </div>
            })}
        </div>
    )
}

export default RightContent