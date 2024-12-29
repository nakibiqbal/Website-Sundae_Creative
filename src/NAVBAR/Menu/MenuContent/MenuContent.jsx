import "./MenuContent.css"
import LeftContent from "../Left_Content/LeftContent"
import RightContent from "../Right_Content/RightContent"
import { motion } from "framer-motion"

const MenuContent = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, }}
            exit={{ opacity: 0 }}
            className="menuContentWrapper">
            <LeftContent />
            <RightContent />
        </motion.div>
    )
}

export default MenuContent
