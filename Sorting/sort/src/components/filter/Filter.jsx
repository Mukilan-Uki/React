import { useState } from "react";

export default function Filter(){
    const data = [
        {id:1, name:"Apple"},
        {id:2, name:"Orange"},
        {id:3, name:"Carrot"},
        {id:4, name:"Mango"}
    ];

    const [searchTerm, setSearchTerm] = useState("");

    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return(
        <div className="container">
            <div className="form-floating">
                <input type="text" className="form-control" placeholder="Search here" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
                <label className="form-label">Search here</label>
            </div>

            <ul className="m-3">
                {filteredData.map((item) =>(
                    <li>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}