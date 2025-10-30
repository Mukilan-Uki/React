import { useState } from "react";

export default function Form(){
    const [UserName,setUsername]=useState('');
    const [submitted,setSubmitted]=useState('');
    const handleChange=(event)=>{
        event.preventDefault();
        const data={
            name:UserName,
        }
        console.log('name'+data.name);
        setSubmitted(data);
    }
    console.log(setSubmitted);

    return(
        <>
        <form>
            <label>UserName(with console)</label>
            <input type="text" value={UserName} onChange={(event)=>console.log(event.target.value)}/>
            <br/>
            <label>UserName(with setUsername)</label>
            <input type="text" value={UserName} onChange={(event)=>setUsername(event.target.value)}/>

            <input type="submit" onClick={event=>handleChange(event)}></input>

            {submitted &&(
                <h1>{submitted.name}</h1>
            )
            }
        </form>
        </>
    )
}