import { motion } from "framer-motion";
import "./Right_Img.css";

const Right_Img = () => {
    return (
        <section id="left_imgSection">
            <motion.img
                src="https://ik.imagekit.io/nakibKit/RightImg.jpg?tr=f-auto,q-auto&updatedAt=1748144182944"
                initial={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
                whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                transition={{ duration: 1.25, ease: [0.86, 0, 0.07, 1] }}
                viewport={{ once: true }}
            />
        </section>
    );
};

export default Right_Img;
