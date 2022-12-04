import React, { useEffect, useState, useContext } from "react";
import { weatherContext } from "../context/WeatherContext";
import { Api } from "../api/Api";
/*Component */
import NavBar from "../components/NavBar";
/* Image */
import BackImageRain from '../assets/img/back-home-rain.png';
import BackImageSunny from '../assets/img/back-home-sunny.png';
import BackImageSnow from '../assets/img/back-home-snow.png';
import userEvent from "@testing-library/user-event";

const Home = () => {

    const{ getToken, weather } = useContext(weatherContext);

    const[weatherData, setWeatherData] = useState();

    useEffect(() => {
        setWeatherData(getToken());
    }, [weather])

    function chooseImage(weather){
        if(weather > 17){
            return BackImageSunny; 
        }else if(weather > 0 && weather < 17){
            return BackImageRain;
        }else{
            return BackImageSnow;
        }
    }
    
    return(
        <> 
        {weatherData &&
            <div className="home-container" style={{backgroundImage: `url(${chooseImage(weatherData.main?.temp)})`}}>
                <NavBar />
                <div className="home">  
                    <div className="home-top-container">
                        <span>Out.</span>
                    </div>
                    <div className="home-bottom-container">
                        <h1>0{Math.ceil(weatherData.main?.temp)}°</h1>
                        <div>
                            <h2>{weatherData.name}</h2>
                            <span>06:43 - mercredi 30 novembre</span>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
        
       
    )
}

export default Home;