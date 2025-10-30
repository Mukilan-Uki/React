export default function Table1(props){
    const {data}=props;
    const {id,name,age,course,grade}=data;
    return (
        <>{
            id.map((data)=>
                <h1>{data}</h1>
            )
            }
        </>
    )
}