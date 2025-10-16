import omg1 from '../assets/homewallpapaer.jpg'
export default function Day3(){
    const styleContant={
        marginTop:'100px',
        marginLeft:'200px'
    }
    const styleDiv={
        display:'flex',
        backgroundColor:'#023047',
        marginLeft:'40px',
        marginRight:'40px'
    }
    const style={
        title:{
            fontWeight:'900px',
            fontSize:'60px',
            color:'white'
        },
        para:{
            color:'white',
            fontSize:'20px'
        },
        button:{
            border:'none',
            backgroundColor:'green',
            color:'white',
            padding:'20px',
            fontSize:'18px'
        },
        img:{
            height:'700px',
            width:'450px',
            marginLeft:'60px'
        }
    }
    return(
        <>
        <div style={styleDiv}>
        <div>
            <img src={omg1} style={style.img} alt="" />
        </div>
        <div style={styleContant}>
            <h1 style={style.title}>Social is your superpower.</h1>
            <p style={style.para}>Easily manage all your social media and get results with Hootsuit.</p>
            <button style={style.button}>Start your free 30-Day Trial</button>
            <p style={style.para}><u><b>Compare plans</b></u></p>
        </div>
        </div>
        </>
    )
}