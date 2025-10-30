import img from '/home/uki-dsa-04/Mukilan/UKi/React/Days/src/components/assets/heart-mark-svgrepo-com.svg'
import { useState } from "react";
export default function Hooks(){
    let clicked=0;
    let [count,setCount]=useState(clicked);

    let handleClicked=()=>{
        console.log(count);
        setCount(count+1);
    }
    let touch=10;
    let [tick,setTick]=useState(touch);

    let handleTick=()=>{
        console.log(tick);
        setTick(tick+4);
    }
    let handleDisLike=()=>{
        console.log(tick);
        setTick(tick-4);
    }
    return(
        <>
            <button onClick={handleClicked}>Click</button>
            <h1>button was clicked {count} times.</h1>

            <button onClick={handleTick}>Like</button>
            <button onClick={handleDisLike}>Dislike</button>
            <br/>
            <img src={img} style={{height:`${tick}px`,width:`${tick}`}}></img>
        </>
    )
}