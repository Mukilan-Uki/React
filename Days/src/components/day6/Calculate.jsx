import { useState } from "react";
export default function Calculate(){
    let num1=10;
    let num2=20;
    let [num3,sum]=useState(0);

    let plus=()=>{
        sum(num2+num1);
        console.log(num3);
    }
    let minus=()=>{
        sum(num2-num1);
        console.log(num3);
    }
    let multiply=()=>{
        sum(num2*num1);
        console.log(num3);
    }
    let divide=()=>{
        sum(num2/num1);
        console.log(num3);
    }
    return(
        <>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={multiply}>*</button>
        <button onClick={divide}>/</button>
        <h1>{num2}?{num1}={num3}</h1>
        </>
    )
}