import { useState} from "react";
export default function Home(){
    const [formData, setFormData] = useState({
        userName:"",
        email:"",
        comment:""
    });
    const [submitted,setSubmitted] = useState([]);

    const handleChange = (e) =>{
        const {name,value} = e.target;

        setFormData((prevData) =>({
            ...prevData,[name]:value,
        }));
    };

    const handleSubmit = (e) =>{
        e.preventDefault();

        alert(`Username: ${formData.userName} 
Email: ${formData.email} 
Comment: ${formData.comment}`);

        setSubmitted((prevList) => [...prevList,formData]);

        setFormData({userName:"",email:"",comment:""});
    }

    return(
        <>
        <div className="container">
            <div className="top">
                <ul className="nav">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>
        </div>
        <form className="container">
            <div className="form-floating m-3">
                <input type="text" className="form-control" name="userName" placeholder="name" value={formData.userName} onChange={handleChange}/>
                <label className="form-label">SampleUser</label>
            </div>
            <div className="form-floating m-3">
                <input type="email" className="form-control" name="email" placeholder="name" value={formData.email} onChange={handleChange}/>
                <label className="form-label">sample@gmail.com</label>
            </div>
            <textarea name="comment" id="textarea" className="m-3" cols={50} rows={10} value={formData.comment} onChange={handleChange}></textarea><br/>
            <input type="submit" className="btn btn-outline-primary m-3" onClick={handleSubmit}/>
        </form>
        </>
    )
}