import React from "react";
/*Component */
import NavBar from "../components/NavBar";

const Home = () => {
    return(
        <div className="home-container">
            <NavBar />
            <div className="home">  
                    <div className="home-top-container">
                        <span>Out.</span>
                    </div>
                    <div className="home-bottom-container">
                        <h1>08°</h1>
                        <div>
                            <h2>London</h2>
                            <span>06:43 - mercredi 30 novembre</span>
                        </div>
                    </div>
            </div>
            
        </div>
    )
}

export default Home;