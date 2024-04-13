import React from "react";
import Navbar from "../components/Navbar";
import Heroimg from "../components/Heroimg";
import Footer  from "../components/Footer";
// import work form "../components/Work";

const Home = ()=>{
    return(
        <div>
            <Navbar/>
            <Heroimg/>
            {/* <work/> */}
            <Footer/>
        </div>
    )
}

export default Home;