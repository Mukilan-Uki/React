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

import  { useState, useEffect } from "react";

export default function Data2() {
  const [students, setStudents] = useState([]);
  const [selectStudent, setSelectStudent] = useState(null);
  const [fontSize, setFontSize] = useState("16px");

  
  useEffect(() => {
    const data = [
      {name:"James", lname:"Kim", course:"IT", country:"Korea", id:"UOV15651", age:"21", gen:"Male", address:"Seoul Korea", skills:"C++,Java,Javascript", image:img1},
      {name:"Emily", lname:"Jones", course:"Computer Science", country:"USA", id:"UOV15652", age:"21", gen:"Female", skills:"Python", image:img2},
      {name:"Michael", lname:"Smith", course:"Engineering", country:"UK", id:"UOV15653", age:"22", gen:"Male", skills:"HTML,CSS", image:img3},
      {name:"Sophia", lname:"Miller", course:"Mathematics", country:"France", id:"UOV15654", age:"24", gen:"Female", skills:"C++", image:img4},
      {name:"Daniel", lname:"Brown", course:"Business", country:"Canada", id:"UOV15655", age:"25", gen:"Male", skills:"Java", image:img5},
      {name:"Olivia", lname:"Johnson", course:"Design", country:"Australia", id:"UOV15656", age:"28", gen:"Female", skills:"Javascript", image:img6},
      {name:"William", lname:"Wilson", course:"Physics", country:"Germany", id:"UOV15657", age:"24", gen:"Male", skills:"", image:img7},
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

    setStudents(data);
  }, []);

  return (
    <div style={{ padding: "20px" }}>

    
      <div style={{ marginBottom: "20px" }}>
        <h3>Change Font Size</h3>
        <button onClick={() => setFontSize("16px")}>Small</button>
        <button onClick={() => setFontSize("20px")} style={{ margin: "0 10px" }}>
          Medium
        </button>
        <button onClick={() => setFontSize("24px")}>Large</button>
      </div>
<div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>

        
        <div style={{ width: "45%" }}>
          <h3>Students Information Potal</h3>

          <table border="1">
            
              <tr>
                <th style={{border:'1px solid black', padding:'10px'}}>First Name</th>
                <th style={{border:'1px solid black', padding:'10px'}}>Last Name</th>
                <th style={{border:'1px solid black', padding:'10px'}}>Course</th>
                <th style={{border:'1px solid black', padding:'10px'}}>Country</th>
                <th style={{border:'1px solid black', padding:'10px'}}>Profile</th>
              </tr>
            

            
              {students.map((student, index) => (
                <tr key={index}>
                  <td style={{border:'1px solid black', padding:'5px'}}>{student.name}</td>
                  <td style={{border:'1px solid black', padding:'5px'}}>{student.lname}</td>
                  <td style={{border:'1px solid black', padding:'5px'}}>{student.course}</td>
                  <td style={{border:'1px solid black', padding:'5px'}}>{student.country}</td>
                  <td>
                    <button onClick={() => setSelectStudent(student)} style={{padding:'10px'}}>View</button>
                  </td>
                </tr>
              ))}
           
          </table>
        </div>

    
        <div style={{ width: "45%",  border: "1px solid gray",height:'800px',marginTop:'20px',padding: "10px",  borderRadius: "10px", fontSize: fontSize, background:'#00b4d8' }} >
          {!selectStudent ? (
            <h3>Select a student to view details</h3>
          ) : (
            <>
              <h2>{selectStudent.name} {selectStudent.lname}</h2>
              
              <div style={{display:'flex',background:'#e5e6e4',height:'650px'}} >

              <img src={selectStudent.image} alt="profile" width="200" height="200" style={{borderRadius:'10px', marginTop:'100px',background:'white', padding:'20px', height:'300px', width:'300px'}}/>
              <div style={{marginLeft:'20px', marginBottom:'200px'}}>
              <p style={{border:'1px solid black', padding:'10px', position:'relative', top:'115px'}}><span>Student ID:</span> {selectStudent.id}</p>
              <p style={{border:'1px solid black', padding:'10px', position:'relative', top:'95px'}}><span>Course:</span> {selectStudent.course}</p>
              <p style={{border:'1px solid black', padding:'10px', position:'relative', top:'85px'}}><span>Country:</span> {selectStudent.country}</p>
              <p style={{border:'1px solid black', padding:'10px', position:'relative', top:'65px'}}><span>Age:</span> {selectStudent.age}</p>
              <p style={{border:'1px solid black', padding:'10px', position:'relative', top:'45px'}}><span>Gender:</span> {selectStudent.gen}</p>
              <p style={{border:'1px solid black', padding:'10px', position:'relative', top:'30px'}}><span>Address:</span> {selectStudent.address}</p>
              <p style={{border:'1px solid black', padding:'10px', position:'relative', top:'10px'}}><span>Skills:</span> {selectStudent.skills}</p>
              </div>
              </div>
            </>
          )}
        </div>
      </div>
      </div>
    </div>
  );
}
