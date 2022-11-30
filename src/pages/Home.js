import React from "react";
/*Component */
import NavBar from "../components/NavBar";

const Home = () => {
    return(
        <div className="home-container">
            <NavBar />
            <div className="home">
                <div className="home-content">
                    <div className="home-content-top-container">
                        Out.
                    </div>
                    <div className="home-content-bottom-container">
                        <h1>08°</h1>
                        <div>
                            <h2>London</h2>
                            <span>06:43 - mercredi 30 novembre</span>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Home;