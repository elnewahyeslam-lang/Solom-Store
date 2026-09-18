import { useState } from "react"
import img1 from './assets/file_00000000d7d881f484780f1768668f84.png'
import img2 from './assets/file_00000000cc5481f496ba2554b7acc5c9.png'
import img3 from './assets/file_00000000cd7c81f482f51a429f38e71c.png'
function Hero(){
    const[currentIndex,setCurrentIndex]=useState(0)
    const images=[img1,img2,img3]
    return(
        <div className="hero">
            <button onClick={()=>setCurrentIndex((currentIndex+1) %images.length)}> {"<"} </button>
            <img src={images[currentIndex]}/>
            <button onClick={()=>setCurrentIndex((currentIndex-1 +images.length) %images.length)}> {">"} </button>
        </div>
    )
}
export default Hero