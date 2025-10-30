import { useState } from "react";

export default function Form1(){
    const [formData, setFormData] = useState({
        userName:"",
        email:"",
        password:""
    });
    const [submittedList,setSubmittedList] = useState([]);

    const handleChange = (e) =>{
        //const {name,value} = e.target;
        const {name} = e.target;
        const {value} = e.target;

        setFormData((prevData) => ({
            ...prevData,[name]:value,
        }));
    };

    const handleSubmit = (e) =>{
        e.preventDefault();

        setSubmittedList((prevList) => [...prevList,formData]);

        setFormData({userName:"",email:"",password:""});
    }

    return(
        <div className="container">
            <form className="form">
        <h1 className="text-center m-5">Multiple Input Form lessLine</h1>
        <div className="form-floating mb-3">
        <input type="text" className="form-control" name="userName" placeholder="Enter Username" value={formData.userName} onChange={handleChange}/>
        <label for="floatingEmail" class="floatingEmail">Enter your username</label>
        </div>
        <div className="form-floating mb-3">
        <input type="email" className="form-control" name="email" placeholder="Enter Email" value={formData.email} onChange={handleChange}/>
        <label for="floatingEmail" class="floatingEmail">Enter your email</label>
        </div>
        <div className="form-floating mb-3">
        <input type="password" className="form-control" name="password" placeholder="Enter Password" value={formData.password} onChange={handleChange}/>
        <label for="floatingEmail" class="floatingEmail">Enter your password</label>
        </div>
        <input type="submit" className="btn btn-outline-primary mt-3" onClick={handleSubmit}/>
         0 

        {submittedList.length > 0 && (
            <div>
                <h3>All Submitted Data:</h3>
                {submittedList.map((item)=>(
            <>
            <span>Username:{item.userName}</span><br/>
            <span>Email:{item.email}</span><br/>
            <span>Password:{item.password}</span><br/>
            </>
            )
            )
            }
            </div>
        )}
            </form>
        </div>
    )
}