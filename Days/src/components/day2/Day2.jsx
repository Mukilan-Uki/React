export default function Day2(){
    const style1={
        color:'black',
        fontSize:'25px',
        display:'flex',
        justifyContent:'start'
    }
    const style2={
        color:'pink',
        fontSize:'25px',
        display:'flex',
        justifyContent:'center'
    }
    const style3={
        color:'blue',
        fontSize:'25px',
        display:'flex',
        justifyContent:'end'
    }
    const style4={
        color:'red',
        fontSize:'25px'
    }
    const style5={
        color:'green',
        fontSize:'35px'
    }
    const style2nd={
        container:{
            backgroundColor:'#faedcd',
            padding:'20px',
            borderRadius:'20px',
            textAlign:'center'
        },
        title:{
            color:'#d4a373',
            fontSize:'20px'
        },
        button:{
            backgroundColor:'#ccd5ae',
            color:'white',
            border:'none',
            padding:'10px 20px',
            borderRadius:'6px',
            cursor:'pointer'
        },
    };
    return(
        <>
        <div style={{background:'#caf0f8',padding:'50px'}}>
            <h1 style={{color:'blue',margin:'50px',display:'flex',justifyContent:'center'}}><u>UKi DreamSpace</u></h1>
            <p style={{fontSize:'20px'}}>Course-Fullstack Development</p>
            <p style={{fontSize:'20px'}}>No of Stu-9 members</p>
            <p style={{fontSize:'20px'}}>Subject-React</p>
        </div>
        <div style={{backgroundColor:'#caf0f8'}}>
            <h1 style={style1}>Mukilan</h1>
            <h1 style={style2}>Mukilan</h1>
            <h1 style={style3}>Mukilan</h1>
            <h1 style={style4}>Mukilan</h1>
            <h1 style={style5}>Mukilan</h1>
        </div>
        <div style={style2nd.container}>
            <h1 style={style2nd.title}>Welcome to React</h1>
            <button style={style2nd.button}>Click me!</button>
        </div>
        </>
    )
}