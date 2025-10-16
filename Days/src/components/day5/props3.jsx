export default function Props3(props){    
    const {data}=props;
    const {name,color,about}=data;
    return(
        <>
        <h1>{props.data.about}</h1>
        
        {
               about.map((data1)=>
                <h1>{data1}</h1>
            )
        }
        </>
    )
}