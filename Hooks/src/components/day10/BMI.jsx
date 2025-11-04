import { useState } from "react";
import './BMI.css';

export default function BMI(){
    const [formData,setFormData]=useState({
        kg:"",
        cm:""
    })
    const [bmiData,setBmiData]=useState();
    const [status,setStatus]=useState();

    let handleChange=(e)=>{
        const {name,value}=e.target;

        setFormData((prevData)=>({
            ...prevData,[name]:value
        }))
    }

    let handleSubmit=(e)=>{
        e.preventDefault();

        if(!formData.cm || !formData.kg){
            alert("Fill it ra Labade");
        }

        let bmi=formData.kg/(Math.pow(formData.cm/100,2));
        setBmiData(bmi.toFixed(1));

        if(bmi<18.5){
            setStatus("Under Weight");
        }
        else if(bmi>18.5 && bmi<24.9){
            setStatus("Normal");
        }
        else if(bmi>24.9 && bmi<29.9){
            setStatus("Over Weight");
        }
        else if(bmi>29.9){
            setStatus("Obesity");
        }
        else{
            setStatus("Invalid input");
        }
    }

    return(
        <form style={{height:"500px", width:"400px"}}>
        <h1 className="text-center">BMI Calculater</h1><br/>
        <label className="form-label fw-bold">Weight (kg)</label>
        <input type="number" name="kg" className="form-control" value={formData.kg} onChange={handleChange} /><br/>
        <label className="form-label fw-bold">Height (cm)</label>
        <input type="number" name="cm" className="form-control" value={formData.cm} onChange={handleChange} /><br/>
        <div className="cal">
            <button onClick={handleSubmit} style={{borderRadius:'10px',border:"none",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center"}}>Calculate</button>
        </div>
        <div className="text-center finalData">
            {bmiData &&(
                <>
            <p>Your BMI: <b>{bmiData}</b></p>
            </>
            )
}
            {status &&(
                <p>Status: <b>{status}</b></p>
            )
        }
        </div>
        </form>
    )
}