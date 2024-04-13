import React from "react";
import "./FooterStyle.css";

import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">

                    <div className="location"><FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
                        <div>
                            <p>
                                G-Block,
                            </p>
                            <p>VITVELLORE</p>
                        </div>
                    </div>

                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{ color: "white", marginRight: "2rem" }} />
                            <p>+91 9468783914</p>
                        </h4>
                    </div>

                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{ color: "white", marginRight: "2rem" }} />
                            <p>kisna.goyal2022@vitstudent.ac.in</p>
                        </h4>

                    </div>


                </div>
                <div className="right">
                    <h4>about me...</h4>
                    <p>about (my info)</p>
                    <div className="social">
                        <FaFacebook size={30} style={{ color: "white", marginRight: "1rem" }} />
                        <FaTwitter size={30} style={{ color: "white", marginRight: "1rem" }} />
                        <FaLinkedin size={30} style={{ color: "white", marginRight: "1rem" }} />



                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer;