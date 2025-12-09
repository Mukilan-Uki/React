import { useEffect, useState } from "react";

export default function API(){

    const [data,setData]=useState([]);

    const [loader,setLoader]=useState(true);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(response => {
            setData(response)
            setLoader(false)
        })
    }, [])

    return(
        <div>
            <h1>API Intergration</h1>
            <div className="row">
                {
                    loader
                    ?
                    <h1>Loading</h1>
                    :
                data.map((data,index)=>(
                    <div className="card col-3 m-3" key={index}>
                        <h2 className="text-center">{data.id}</h2>
                        <h2>{data.name}</h2>
                        <h2>{data.username}</h2>
                        <h2>{data.email}</h2>
                    </div>
                ))
            }
            </div>
        </div>
    )
}