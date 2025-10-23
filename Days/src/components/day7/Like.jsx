import { useEffect, useState } from "react";

export default function Like(){
    let clicked=0;
    let[count,setCount]=useState(clicked);

    let handleClicked=()=>{
        setCount(count+1);
        console.group(count);
    }

    // let fun1=()=>{
    //     if(count>=5){
    //         alert('count  more than 5')
    //     }
    // }
    // useEffect(fun1,[count]);

    useEffect(()=>{
        if(count>=5){
            alert('count more than 5');
        }
    },[count])

    return(
        <>
        <button onClick={handleClicked} style={{padding:'15px'}}>Like{count}</button>
        <h1>{count}</h1>
        </>
    )
}