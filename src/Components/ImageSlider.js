import { useState } from "react";
import ImageData from "./ImageData"
import { AiOutlineArrowLeft,AiOutlineArrowRight } from "react-icons/ai";

const ImageSlider=()=>{
const [current,setcurrent] = useState(0)
const lengthData = ImageData.length
// console.log(lengthData+1);
    const prevSlide=()=>{
        current === 0 ? setcurrent(lengthData-1) :setcurrent(current-1)
    }
    const nextSlide=()=>{
        current === lengthData-1 ? setcurrent(0) : setcurrent(current+1)     
    }
    return(
        <section className="slider">
            <AiOutlineArrowLeft className="leftArrow" onClick={prevSlide}/>
            <AiOutlineArrowRight className="rightArrow"onClick={nextSlide} />
            {ImageData.map((data,index)=>{
                return(
                    <div className={index == current ? "slide active" : "slide"} key={index}>
                      {index === current &&
                      (
                        <div>
                        <img src={data.Image} alt={data.title} className="Image"/>
                        <p>{data.title}</p>
                        <p>{current+1}/{lengthData}</p>
                    </div>
                      ) }
                    </div>
                )
            })}
        </section>
    )
}

export default ImageSlider