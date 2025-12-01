import logo from "../assets/logo.svg";
import call from "../assets/call.svg";
import line from "../assets/line.png";
import mukilan from "../assets/mukilan.png";
import mukilan2 from "../assets/mukilan2.jpeg";
import mukilanWithBg from "../assets/mukilanWithBg.jpg";
import project1 from "../assets/project1.JPG";
import project2 from "../assets/project2.JPG";
import project3 from "../assets/project3.JPG";
import project4 from "../assets/project4.JPG";

export default function Home() {
  const project = [
    { title: "To-Do List website", sub: "Responsive Design", img: project1 },
    { title: "making Ghost", sub: "Responsive Design", img: project2 },
    { title: "Hello there", sub: "Responsive Design", img: project3 },
    { title: "Ukis Dreamspace", sub: "Responsive Design", img: project4 },
  ];

  return (
    <body className="body">
      <section className="home">
        <nav className="top navbar navbar-expand-lg navbar-light fixed-top shadow-sm">
          <div className="logo navbar-brand">
            <img src={logo} alt="logo" />
          </div>
          <div className="nav">
            <ul className="d-flex">
              <li className="mx-3 navLi">
                <a href="#home" className="nav-link text-dark">
                  Home
                </a>
              </li>
              <li className="mx-3 navLi">
                <a href="#about" className="nav-link text-dark">
                  About me
                </a>
              </li>
              <li className="mx-3 navLi">
                <a href="#project" className="nav-link text-dark">
                  Projects
                </a>
              </li>
              <li className="mx-3 navLi">
                <a href="#contact" className="nav-link text-dark">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="call m-3">
            <h4>
              Make a Call <img src={call} alt="call" className="callImg" />
            </h4>
          </div>
        </nav>
        <div className="left">
          <p>
            2025 <img src={line} alt="line" className="lineImg" /> Software
            Engineer
          </p>
        </div>
        <div className="middle1">
          <div className="contantTop d-flex">
            <div className="m-3">
              +
              <span className="display-1" style={{ fontWeight: "500" }}>
                500
                <br />
              </span>
              <span className="text-muted">Hours working experience</span>
            </div>
            <div className="m-3">
              +
              <span className="display-1" style={{ fontWeight: "500" }}>
                200
                <br />
              </span>
              <span className="text-muted">IQ Level</span>
            </div>
          </div>
          <div className="contantMiddle m-3">
            <h1 className="name">Mukilan</h1>
          </div>
        </div>
        <div className="photo">
          <img src={mukilan} alt="mukilan" className="mukilan" />
        </div>
      </section>

      <div className="about">
        <div className="d-flex">
          <div className="m-3 me">
            <h1 className="display-1 fw-bold">About me</h1>
            <p>
              Mukilan is a Full Stack Development student at Dreamspace Academy
              through Uki programme, gaining hands-on experience in building
              dynamic, user-friendly web applications. Currently pursuing a
              Diploma in Information Technology (DIIT) and Diploma in English
              (DIE) at ESOFT to strengthen technical expertise and communication
              skills.
            </p>
          </div>
          <div className="m-3 me card">
            <p className="display-1">120%</p>
            <p>Average increase in client engegement in first 6 motnh</p>
            <img src={mukilan2} alt="mukilan 2" className="mukilan2" />
          </div>
          <div className="m-3">
            <img
              src={mukilanWithBg}
              alt="mukilanbg"
              className="mukilanWithBg"
            />
            <ul>
              <li>
                <p>
                  Recognized achievement as a Royal College chess certificate
                  holder, reflecting problem-solving ability, strategy, and
                  discipline.
                </p>
              </li>
              <li>
                <p>
                  Long-term ambition: pursue higher studies abroad through
                  opportunities such as the DAAD scholarship and contribute to
                  impactful solutions in the global IT industry.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="projectsCon">
        {project.map((item, index) => (
          <>
            <div className="project" key={index}>
              <img src={item.img} alt={item.title} className="projectImg" />
              <h1 className="m-3 fw-bold display-6">{item.title}</h1>
              <p className="m-3 fs-4">{item.sub}</p>
            </div>
          </>
        ))}
      </div>
    </body>
  );
}
