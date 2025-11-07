import { useState } from "react";

export default function FilterDay3(){
    const data=[
        {id:1, name:"Apple", category:"Fruit", color:"Red", origin:"USA", taste:"Sweet", price:2},
        {id:2, name:"Carrot", category:"Vegetable", color:"Orange", origin:"India", taste:"Sweet", price:1},
        {id:3, name:"Banana", category:"Fruit", color:"Yellow", origin:"Sri Lanka", taste:"Sweet", price:1.5}
    ];

    const [searchTerm, setSearchTerm] = useState("");

    const filterData = data.filter((item) => {
        const values = Object.values(item).join(" ").toLowerCase();
        return values.includes(searchTerm.toLowerCase());
    });

    const fieldNames = Object.keys(data[0]);

    return(
        <>
        <div className="container">
            <h1 className="my-3">Global Search Across All Fields</h1>
            <div className="form-floating my-3">
                <input type="text" placeholder="asdfghjkl" className="form-control" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                <label className="form-label">Search anything...</label>
            </div>
            <table border={1} className="table table-bordered text-center">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Color</th>
                    <th>Origin</th>
                    <th>Taste</th>
                    <th>Price</th>
                </tr>
            {filterData.length > 0 ? (
                    filterData.map((item, index) => (
                        <tr key={index}>
                            {fieldNames.map((field) =>(
                                <td key={field}>{item[field]}</td>
                            ))}
                        </tr>
                    ))
                ):(
                    <tr>
                        <td colSpan={fieldNames.length}>No matching results found</td>
                    </tr>
                )}
            </table>
        </div>
        </>
    )
}