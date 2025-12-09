import { useState } from "react"

export default function ColorBox(){

    const [color,setColor]=useState("white")

    const handleChange=(newColor)=>{  
        setColor(newColor)
    }

    return(
        <>
        <div className="box" style={{height:"400px", width:"400px", backgroundColor:color, borderRadius:"20px"}}></div>
        <button className="btn text-light m-3 P-3" style={{backgroundColor:"red"}} onClick={()=>handleChange("red")}>Red</button>
        <button className="btn text-light m-3 P-3" style={{backgroundColor:"yellow"}} onClick={()=>handleChange("yellow")}>Yellow</button>
        <button className="btn text-light m-3 P-3" style={{backgroundColor:"brown"}} onClick={()=>handleChange("Brown")}>Brown</button>
        <button className="btn text-light m-3 P-3" style={{backgroundColor:"green"}} onClick={()=>handleChange("green")}>Green</button>
        <button className="btn text-light m-3 P-3" style={{backgroundColor:"blue"}} onClick={()=>handleChange("blue")}>Blue</button>
        </>
    )
}