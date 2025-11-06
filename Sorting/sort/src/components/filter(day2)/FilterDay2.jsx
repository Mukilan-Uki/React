import { useState } from "react";

export default function FilterDay2(){
    const data = [
        {title:"Oceanview Resort", city:"Galle", price:"$85"},
        {title:"Mountain Retreat", city:"Nuwara Eliya", price:"$72"},
        {title:"City Central Hotel", city:"Colombo", price:"$110"},
        {title:"Lakeside Villas", city:"Kandy", price:"$95"}
    ];

    const [search,setSearch] = useState("");

    const filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );
    
    const [book,setBook] = useState("Book Now");

    let handleClick=(item)=>{
        alert(`You Booked ${item.title}`)

        setBook("Booked")
    }

    return(
        <div className="text-center">
        <div className="container">
            <h1>Travel Booking App</h1>
            <div className="form-floating">
                <input type="text" className="form-control" placeholder="asdfghjkl" value={search} onChange={(e) => setSearch(e.target.value)}/>
                <label>Search here</label>
            </div>
            <div className="row">
                {filteredData.map((item =>(
                    <div className="col card m-1 my-4">
                        <span className="card-title">{item.title}</span>
                        <span className="text-muted">City: {item.city}</span>
                        <span className="text-muted">Price per night: {item.price}</span>
                        <button className="btn btn-success my-3" onClick={() => handleClick(item)}>{book}</button>
                    </div>
                )))}
            </div>
        </div>
        </div>
    )
}