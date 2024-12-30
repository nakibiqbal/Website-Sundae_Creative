import "./MenuContent.css"
import LeftContent from "../Left_Content/LeftContent"
import RightContent from "../Right_Content/RightContent"

const MenuContent = () => {
    return (
        <div
            className="menuContentWrapper">
            <LeftContent />
            <RightContent />
        </div>
    )
}

export default MenuContent
