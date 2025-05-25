import { motion, useScroll } from "framer-motion";
import "./ImgSec2.css"
import useAnimationScroll from "../../../ANIMATIONS/useAnimationScroll";
import { useRef } from "react";

const ImgSec2 = () => {
    const imgSecRef = useRef(null);

    const images = [
        { src: "https://ik.imagekit.io/nakibKit/pImg4.jpg?tr=f-auto,q-auto&updatedAt=1748144182165", className: "top-left", xAxis: "15vw" },
        { src: "https://ik.imagekit.io/nakibKit/pImg1.jpg?tr=f-auto,q-auto&updatedAt=1748144177954", className: "top-right", xAxis: "-15vw" },
        { src: "https://ik.imagekit.io/nakibKit/pImg3.jpg?tr=f-auto,q-auto&updatedAt=1748144181293", className: "center", scale: 0.5 },
        { src: "https://ik.imagekit.io/nakibKit/pImg5.jpg?tr=f-auto,q-auto&updatedAt=1748144182732", className: "bottom-left", xAxis: "30vw", yAxis: "20vw" },
        { src: "https://ik.imagekit.io/nakibKit/pImg2.jpg?tr=f-auto,q-auto&updatedAt=1748144177950", className: "bottom-right", xAxis: "-25vw", yAxis: "20vw" },
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
