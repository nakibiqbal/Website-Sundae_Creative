import { useState } from "react";
import "./Section_7.css";
import { Section_7DATA } from "./Section_7DATA";
import { motion } from "framer-motion";
import useClipPathAnimation2 from "../../ANIMATIONS/useClipPathAnimation2";

const Section_7 = () => {

    const [sec7Data] = useState(Section_7DATA);
    const headingVariants = useClipPathAnimation2()

    return (
        <section id="section_7">
            <div className="contentWrapper7">

                {sec7Data.map((item) => {
                    const { id, title, imageUrl } = item;
                    return (
                        <div key={id} className="imgBox">
                            <div className="squre_text">
                                <motion.span
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.25, ease: [0.86, 0, 0.07, 1] }}
                                ></motion.span>
                                <motion.h6
                                    variants={headingVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    {title}
                                </motion.h6>
                            </div>
                            <img src={imageUrl} alt={title} loading="lazy" />
                        </div>
                    )

                })}

            </div>
        </section>
    )
}

export default Section_7
