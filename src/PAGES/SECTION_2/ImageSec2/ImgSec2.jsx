import { motion, useScroll } from "framer-motion";
import pImg1 from "/Images/pImg1.jpg";
import pImg2 from "/Images/pImg2.jpg";
import pImg3 from "/Images/pImg3.jpg";
import pImg4 from "/Images/pImg4.jpg";
import pImg5 from "/Images/pImg5.jpg";
import "./ImgSec2.css"
import useAnimationScroll from "../../../ANIMATIONS/useAnimationScroll";
import { useRef } from "react";

const ImgSec2 = () => {
    const imgSecRef = useRef(null);

    const images = [
        { src: pImg4, className: "top-left", xAxis: "15vw" },
        { src: pImg1, className: "top-right", xAxis: "-15vw" },
        { src: pImg3, className: "center", scale: 0.5 },
        { src: pImg5, className: "bottom-left", xAxis: "30vw", yAxis: "20vw" },
        { src: pImg2, className: "bottom-right", xAxis: "-25vw", yAxis: "20vw" },
    ];

    const { scrollYProgress } = useScroll({
        target: imgSecRef,
        offset: ["start end", "end 70%"]
        // start of the section AND end of the viewport
        // end of the section AND end of the viewport
    });

    const { ParallaxMovement } = useAnimationScroll(scrollYProgress, imgSecRef)

    return (
        <div ref={imgSecRef} className="sec2ImgWrapper" >
            {
                images.map((img, index) => {
                    const { src, className, xAxis, yAxis, scale } = img;
                    // 
                    return <motion.img key={index}
                        style={{
                            x: ParallaxMovement(xAxis, 0),
                            y: ParallaxMovement(yAxis, 0),
                            scale: ParallaxMovement(scale, 1)
                        }}
                        src={src}
                        className={className}
                        alt={`img-${index}`}
                    />
                })
            }
        </div>
    )
}

export default ImgSec2;
