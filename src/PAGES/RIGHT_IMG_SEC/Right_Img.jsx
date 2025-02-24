import { motion } from "framer-motion";
import "./Right_Img.css";
import RightImg from "/Images/RightImg.jpg";

const Right_Img = () => {
    return (
        <section id="left_imgSection">
            <motion.img
                src={RightImg}
                initial={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
                whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                transition={{ duration: 1.25, ease: [0.86, 0, 0.07, 1] }}
                viewport={{ once: true }}
            />
        </section>
    );
};

export default Right_Img;
