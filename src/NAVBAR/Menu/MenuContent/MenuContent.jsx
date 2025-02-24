import "./MenuContent.css"
import LeftContent from "../Left_Content/LeftContent"
import RightContent from "../Right_Content/RightContent"
import CustomCursor from "../../../CURSOR/CustomCursor";
import { useRef, useState } from "react";

const MenuContent = () => {
    const navRef = useRef(null);
    const [cursorVis, setCursorVis] = useState(false);

    return (
        <>
            <div
                ref={navRef}
                onMouseEnter={() => setCursorVis(true)}
                onMouseLeave={() => setCursorVis(false)}
                className="menuContentWrapper">
                <LeftContent />
                <RightContent />
            </div>
            <CustomCursor sectionRef={navRef} cursorVis={cursorVis} />
        </>
    )
}

export default MenuContent
