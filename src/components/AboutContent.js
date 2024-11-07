import "./AboutContent.css";
import { Link } from "react-router-dom";
import React from "react";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>About Me</h1>
                <p>
                    Pursuing B.Tech in Computer Science at VIT Vellore with a CGPA of 8.62.
                    <br /> Skilled in Data Structures, Algorithms, Java, Python, C++, JavaScript, React, and SQL.
                    <br /> Created a React portfolio with various projects and solved over 250 coding problems.
                    <br /><br />
                    I’m passionate about:
                    <br /> - Building impactful solutions with collaborative teams
                    <br /> - Continuous learning and exploring new technologies
                    <br /><br />
                    Outside coding, I enjoy chess and badminton.
                    <br /> Aspiring for a software development career to apply my skills and make a difference.
                </p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>

            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={React1} className="img" alt="About Me" />
                    </div>
                    <div className="img-stack bottom">
                        <img src={React2} className="img" alt="Projects" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContent;
