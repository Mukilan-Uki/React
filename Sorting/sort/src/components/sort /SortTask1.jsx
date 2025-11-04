import { useState } from "react";

export default function SortTask(){
    const [sorted,setSorted] = useState(
        [
            {id:1, Name:"Arun", Marks:85, Department:"Computer"},
            {id:2, Name:"Meena", Marks:92, Department:"Electronics"},
            {id:3, Name:"Suresh", Marks:78, Department:"Mechanical"},
            {id:4, Name:"Divya", Marks:88, Department:"Civil"},
            {id:5, Name:"Kishore", Marks:95, Department:"Computer"},
            {id:6, Name:"Priya", Marks:81, Department:"Electronics"},
            {id:7, Name:"Nimal", Marks:89, Department:"Civil"}
        ]
    )

    const idSortingAs = () =>{
        const sorting=[...sorted].sort((a,b) => a.id - b.id);
        setSorted(sorting);
    }

    const idSortingDs = () =>{
        const sorting=[...sorted].sort((a,b) => b.id - a.id);
        setSorted(sorting);
    }

    const MarksSortingAs = () =>{
        const sorting=[...sorted].sort((a,b) => a.Marks - b.Marks);
        setSorted(sorting);
    }

    const MarksSortingDs = () =>{
        const sorting=[...sorted].sort((a,b) => b.Marks - a.Marks);
        setSorted(sorting);
    }

    const depSortingAs = () =>{
        const sorting=[...sorted].sort((a,b) => 
        a.Name.localeCompare(b.Name)
        );
        setSorted(sorting);
    }

    const depSortingDs = () =>{
        const sorting=[...sorted].sort((a,b) =>
        b.Name.localeCompare(a.Name)
        );
        setSorted(sorting);
    }

    return(
        <div className="container">
        <table className="table table-bordered">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Marks</th>
                <th>Department</th>
            </tr>
            {
                sorted.map((item) =>(
                    <tr>
                        <th>{item.id}</th>
                        <th>{item.Name}</th>
                        <th>{item.Marks}</th>
                        <th>{item.Department}</th>
                    </tr>
                ))
            }
        </table>

        <div className="btn-group">
            <button onClick={idSortingAs} className="btn btn-item btn-outline-primary">AS ID</button>
            <button onClick={idSortingDs} className="btn btn-item btn-outline-primary">DS ID</button>
            <button onClick={MarksSortingAs} className="btn btn-item btn-outline-primary">AS MARKS</button>
            <button onClick={MarksSortingDs} className="btn btn-item btn-outline-primary">AS MARKS</button>
            <button onClick={depSortingAs} className="btn btn-item btn-outline-primary">AS DEPARTMENT</button>
            <button onClick={depSortingDs} className="btn btn-item btn-outline-primary">AS DEPARTMENT</button>
        </div>
        </div>
    )
}