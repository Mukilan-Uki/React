import logo from '../assets/logo.svg'
import call from '../assets/call.svg'
import line from '../assets/line.png'
import mukilan from '../assets/mukilan.png'

export default function Home(){
    const project=[
        {title:"To-Do List website", sub:"Responsive Design", img:{}},
        {title:"To-Do List website", sub:"Responsive Design", img:{}},
        {title:"To-Do List website", sub:"Responsive Design", img:{}},
        {title:"To-Do List website", sub:"Responsive Design", img:{}},
    ];

    return(
        <html>
        <body className="body">
        <div className="home">
            <div className="top d-flex m-5">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="nav">
                    <ul className="d-flex">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Project</a></li>
                        <li><a>Conatct</a></li>
                    </ul>
                </div>
                <div className="call">
                    <h3>Make a Call <img src={call} alt="call" className='callImg' /></h3>
                </div>
            </div>
            <div className="left">
                <p>2025 <img src={line} alt="line" className='lineImg' /> Software Engineer</p>
            </div>
            <div className='middle1'>
                <div className='contantTop d-flex'>
                    <div className='m-3'>+<span className='number display-3' style={{fontWeight:"500"}}>500<br/></span><span className='text-muted'>Hours working experience</span></div>
                    <div className='m-3'>+<span className='number display-3' style={{fontWeight:"500"}}>200<br/></span><span className='text-muted'>IQ Level</span></div>
                </div>
                <div className='contantMiddle m-3'>
                    <h1 className='name'>Mukilan</h1>
                </div>
            </div>
            <div className='photo'>
                <img src={mukilan} alt="mukilan" className='mukilan'/>
            </div>
        </div>
        </body>
        </html>
    )
}