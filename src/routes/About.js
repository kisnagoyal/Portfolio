import React from "react";
import Navbar from "../components/Navbar";
import Footer  from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import AboutContent from  "../components/AboutContent";

const About = ()=>{
    return(
<>
<Navbar/>
<Heroimg2 heading="About" text="I am a friendly software engineer"/>
<AboutContent/>
<Footer/>
</>
    )
}

export default About;