import { useState } from "react";

export default function Sort(){
    const [sorted, setSorted] = useState(
        [
            {id:1, name:"Mukilan", age:20},
            {id:2, name:"Thulekshan", age:22},
            {id:3, name:"Moumith", age:25},
            {id:4, name:"Dilu", age:19}
        ]
    )
    const idSortingAs = () =>{
        const sorting = [...sorted].sort((a,b) =>a.id - b.id);
        setSorted(sorting);
    }

    const idSortingDs = () =>{
        const sorting = [...sorted].sort((a,b) =>b.id - a.id);
        setSorted(sorting);
    }

    const ageSortingAs = () =>{
        const sorting = [...sorted].sort((a,b) =>a.age - b.age);
        setSorted(sorting);
    }

    const ageSortingDs = () =>{
        const sorting = [...sorted].sort((a,b) =>b.age - a.age);
        setSorted(sorting);
    }

    const stringSortAs = () =>{
        const sorting =[...sorted].sort((a,b) =>
        a.name.localeCompare(b.name)
        );
        setSorted(sorting);
    }

    const stringSortDs = () =>{
        const sorting =[...sorted].sort((a,b) =>
        b.name.localeCompare(a.name)
        );
        setSorted(sorting);
    }

    return(
        <div className="container">
        <table className="table table-bordered">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
        {
            sorted.map((item) =>(
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                    </tr>
            ))}
            </table>
            <div className="btn-group">
                <button className="btn btn-item btn-outline-primary" onClick={idSortingAs}>AS ID</button>
                <button className="btn btn-item btn-outline-primary" onClick={idSortingDs}>DS ID</button>
                <button className="btn btn-item btn-outline-primary" onClick={ageSortingAs}>AS AGE</button>
                <button className="btn btn-item btn-outline-primary" onClick={ageSortingDs}>DS AGE</button>
                <button className="btn btn-item btn-outline-primary" onClick={stringSortAs}>AS NAME</button>
                <button className="btn btn-item btn-outline-primary" onClick={stringSortDs}>DS NAME</button>
            </div>
        </div>
    )
}