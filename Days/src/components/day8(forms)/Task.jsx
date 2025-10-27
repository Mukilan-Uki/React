import { useState } from "react";

export default function Task(){
    const [userName,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [gender,setGender]=useState('');
    const [submit,setData]=useState('');

    const handleEvent=(task)=>{
        task.preventDefault();
        const data={
            name:userName,
            pass:password,
            gen:gender
        }
        setData(data)
    }
    return(
        <>
        <form>
            <label>Username: </label>
            <input type="text" value={userName} onChange={(task)=>setUsername(task.target.value)}/>
            <br/>
            <label>Password: </label>
            <input type="password" value={password} onChange={(task)=>setPassword(task.target.value)}/>
            <br/>
            <label>Gender: </label>
            <br/>
            <label>Male </label>
            <input type="radio" value="Male" name="gender" onChange={(task)=>setGender(task.target.value)}/>
            <label>Female </label>
            <input type="radio" value="Female" name="gender" onChange={(task)=>setGender(task.target.value)}/>
            <br/>
            <input type="submit" onClick={handleEvent}/>
        </form>

        {submit &&(
            <>
            <h2>Username: {submit.name}</h2>
            <h2>Password: {submit.pass}</h2>
            <h2>Gender: {submit.gen}</h2>
            </>
        )
        }
        </>
    )
}