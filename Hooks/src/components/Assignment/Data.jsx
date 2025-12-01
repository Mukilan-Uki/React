import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'
import img6 from '../assets/6.jpg'
import img7 from '../assets/7.jpg'
import img8 from '../assets/8.jpg'
import img9 from '../assets/9.jpg'
import img10 from '../assets/10.jpg'
import img11 from '../assets/11.jpg'
import img12 from '../assets/12.jpg'
import img13 from '../assets/13.jpg'
import img14 from '../assets/14.jpg'
import img15 from '../assets/15.jpg'
import img16 from '../assets/16.jpg'
import img17 from '../assets/17.jpg'
import img18 from '../assets/18.jpg'

import { useEffect, useState } from "react";

export default function Data(){
    const [students,setStudents]=useState([]);
    const [fontSize,setFontSize]=useState("16px");
    const [imgSize,setImgSize]=useState("")
    const [finalStudent,setFinalStudent]=useState("300px")

    let handleClickM=()=>{
        setFontSize("16px")
        setImgSize("300px")
    }

    let handleClickS=()=>{
        setFontSize("10px")
        setImgSize("200px")
    }

    let handleClickL=()=>{
        setFontSize("24px")
        setImgSize("400px")
    }

    useEffect(()=>{
    const data = [
        {name:"James", lname:"Kim", course:"IT", country:"Korea", id:"UOV15651", age:"21", gen:"Male", address:"Seoul Korea", skills:"C++,Java,Javascript", image:img1},
        {name:"Emily", lname:"Jones", course:"Computer Science", country:"USA", id:"UOV15652", age:"21", gen:"Female", skills:"Python", image:img2},
        {name:"Michael", lname:"Smith", course:"Engineering", country:"UK", id:"UOV15653", age:"22", gen:"Male", skills:"HTML,CSS", image:img3},
        {name:"Sophia", lname:"Miller", course:"Mathematics", country:"France", id:"UOV15654", age:"24", gen:"Female", skills:"C++", image:img4},
        {name:"Daniel", lname:"Brown", course:"Business", country:"Canada", id:"UOV15655", age:"25", gen:"Male", skills:"Java", image:img5},
        {name:"Olivia", lname:"Johnson", course:"Design", country:"Australia", id:"UOV15656", age:"28", gen:"Female", skills:"Javascript", image:img6},
        {name:"William", lname:"Wilson", course:"Physics", country:"Germany", id:"UOV15657", age:"24", gen:"Male", skills:"Nothing", image:img7},
        {name:"Ava", lname:"Davis", course:"Medicine", country:"Japan", id:"UOV15658", age:"25", gen:"Female", skills:"Ruby", image:img8},
        {name:"Liam", lname:"Taylor", course:"Psychology", country:"India", id:"UOV15659", age:"22", gen:"Male", skills:"Java,HTML", image:img9},
        {name:"Ema", lname:"Thomas", course:"Environmental Science", country:"Brazil", id:"UOV15660", age:"21", gen:"Female", skills:"Ruby", image:img10},
        {name:"Noah", lname:"White", course:"Political Science", country:"USA", id:"UOV15661", age:"25", gen:"Male", skills:"JavaScript", image:img11},
        {name:"Isabella", lname:"Anderson", course:"Sociology", country:"South Africa", id:"UOV15662", age:"26", gen:"Female", skills:"C++", image:img12},
        {name:"Mason", lname:"Moore", course:"Economics", country:"Russia", id:"UOV15663", age:"22", gen:"Male", skills:"CSS,HTML", image:img13},
        {name:"Aria", lname:"Martin", course:"History", country:"Italy", id:"UOV15664", age:"21", gen:"Female", skills:"Javascript", image:img14},
        {name:"Ethan", lname:"Clark", course:"Chemistry", country:"Korea", id:"UOV15665", age:"25", gen:"Male", skills:"CSS", image:img15},
        {name:"Grace", lname:"Lewis", course:"Nursing", country:"Sweden", id:"UOV15666", age:"24", gen:"Female", skills:"C++", image:img16},
        {name:"Logan", lname:"Hill", course:"Astronomy", country:"USA", id:"UOV15667", age:"23", gen:"Male", skills:"Ruby", image:img17},
        {name:"Mia", lname:"Ward", course:"Linguistics", country:"Spain", id:"UOV15668", age:"20", gen:"Female", skills:"Python",image:img18}  
    ];
    setStudents(data)
    },[]);

      return(
        <div className='row'>
        <table className='table table-bordered col'>
            <tr>
                <th className='p-3'>Firstname</th>
                <th>Lastname</th>
                <th>Course</th>
                <th>Country</th>
                <th>Profile</th>
            </tr>
        {students.map((item, index)=>(
            <tr key={index}>
                <td className='p-3'>{item.name}</td>
                <td>{item.lname}</td>
                <td>{item.course}</td>
                <td>{item.country}</td>
                <td><button className='btn btn-dark border' onClick={()=>setFinalStudent(item)}>View</button></td>
            </tr>
        ))}
        </table>

        {finalStudent &&(
            <div className='col'>
                <div className='btn-group m-3'>
                    <button className='btn btn-warning btn-item' onClick={handleClickS}>Small</button>
                    <button className='btn btn-outline-warning btn-item'  onClick={handleClickM}>Medium</button>
                    <button className='btn btn-warning btn-item'  onClick={handleClickL}>Large</button>
                </div>

            <div className='d-flex'>
                <img src={finalStudent.image} style={{width:imgSize}} alt="image1"/>
                <div className='details' style={{fontSize:fontSize}}>
                    <p>ID:{finalStudent.id}</p>
                    <p>Full Name:{finalStudent.name}{finalStudent.lname}</p>
                    <p>Age:{finalStudent.age}</p>
                    <p>Course:{finalStudent.course}</p>
                    <p>Gender:{finalStudent.gen}</p>
                    <p>Address:{finalStudent.country}</p>
                    <p>Skills:{finalStudent.skills}</p>
                </div>
            </div>
            </div>
        )}
        </div>
      )
}