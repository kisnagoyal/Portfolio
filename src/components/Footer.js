import React from "react";
import "./FooterStyle.css";
import { FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "white", marginRight: "1rem" }} />
                        <p>G-Block, VIT Vellore</p>
                    </div>
                    <div className="phone">
                        <FaPhone size={20} style={{ color: "white", marginRight: "1rem" }} title="+91 9468783914"/>
                        <span>{"+91"} {"9468783914"}</span>
                    </div>
                    <div className="email">
                        <FaMailBulk size={20} style={{ color: "white", marginRight: "1rem" }} />
                        <a href="mailto:kisna.goyal2022@vitstudent.ac.in">kisna.goyal2022@vitstudent.ac.in</a>
                    </div>
                </div>
                
                <div className="right">
                    <h4>Connect with Me</h4>
                    <a  className="leetcode"
                        href="https://www.leetcode.com/u/kisnagoyal"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "white", fontSize: "1.1rem", marginRight: "1rem", textDecoration: "none" }}
                    >
                        LeetCode
                    </a>
                    <div className="social">
                        <FaInstagram
                            size={30}
                            style={{ color: "white", marginRight: "1rem" }}
                            onClick={() => window.open("https://www.instagram.com/kisnagoyal/", "_blank")}
                        />
                        <FaTwitter
                            size={30}
                            style={{ color: "white", marginRight: "1rem" }}
                            onClick={() => window.open("https://x.com/Kisna91952693", "_blank")}
                        />
                        <FaLinkedin
                            size={30}
                            style={{ color: "white", marginRight: "1rem" }}
                            onClick={() => window.open("https://www.linkedin.com/in/kisnagoyal", "_blank")}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
