import "./Heroimg.css";
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";


const Heroimg = () =>{
    return (
        <div className="hero">
            <div className="mask">
                <img className="into-img" src={IntroImg} alt="IntroImg"/>
            </div>
            <div className="content">
                <p>Hi! My name is Kisna</p>
                <h1>Future SWE</h1>
                <div>
                    <Link to="/project" className="btn">Projects</Link>
                    <Link to="/contact" className="btn btn-light">Contacts</Link>
                </div>
            </div>
        </div>
    )
}

export default Heroimg;